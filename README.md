# sanderworks.be — Personal Portfolio

A personal portfolio website built with Angular (SSR) and deployed on self-managed Linux hardware. The full stack — from the physical server to the TLS certificate and CI/CD pipeline — is configured and maintained by hand.

Live at: **[sanderworks.be](https://sanderworks.be)**

---

## Overview

Most portfolio sites are hosted on Vercel or Netlify with zero infrastructure involvement. This one runs on a repurposed desktop machine. The goal was to own the entire stack: hardware, OS, reverse proxy, containerization, TLS, and automated deployment — the same concerns a backend engineer deals with in production.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | Angular (SSR via Angular Universal — chosen to learn the technology, not because the use case requires it) |
| Runtime | Node.js 20 (serves `server.mjs`) |
| Reverse proxy | Nginx (host-installed) |
| Containerization | Docker / Docker Compose |
| TLS | Let's Encrypt (Certbot) |
| CI/CD | GitHub Actions + SSH deploy |
| OS | Linux |
| Hardware | Repurposed desktop PC |

---

## Architecture

```
Internet
    │
    ▼
[ Router — port forwarding: 80, 443 ]
    │
    ▼
[ Linux host ]
    │
    ├── Nginx (host)  ←  TLS termination, HTTP→HTTPS redirect
    │       │
    │       └── reverse proxy → localhost:4000
    │
    └── Docker
            │
            └── node container (Node.js 20)
                    │
                    └── serves Angular SSR app on port 4000
```

Nginx runs directly on the host rather than in a container. It handles TLS and proxies requests to the Node.js container, which is only bound to `127.0.0.1:4000` and not exposed publicly.

---

## CI/CD Pipeline

Deployments are triggered automatically on every push to `main`.

```
Push to main
    │
    ▼
GitHub Actions runner (ubuntu-latest)
    ├── Checkout code
    ├── Install Node.js 20
    ├── npm install
    └── Build check (ng build --configuration=production)
            │
            │  only if build succeeds
            ▼
        SSH into server (port 2222)
            ├── git pull origin main
            ├── npm install
            ├── ng build --configuration=production
            ├── docker-compose down
            └── docker-compose up -d
```

The build is verified in the GitHub Actions environment before the server is touched. Server credentials (host, user, SSH key) are stored as GitHub Actions secrets and never appear in the repository.

---

## Nginx configuration

Nginx handles two concerns: redirecting HTTP to HTTPS, and proxying HTTPS traffic to the Node container.

```nginx
server {
    listen 80;
    server_name sanderworks.be www.sanderworks.be;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name sanderworks.be www.sanderworks.be;

    ssl_certificate /etc/letsencrypt/live/sanderworks.be/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sanderworks.be/privkey.pem;

    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Running locally

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo.git
cd your-repo/Portfolio

# Install dependencies
npm install

# Build
ng build --configuration=production

# Start with Docker Compose
cd ..
docker-compose up --build

# Visit http://localhost:4000
```

Requires Node.js 20, Angular CLI, and Docker.

---

## Project structure

```
.
├── docker-compose.yml
├── nginx.conf                  # Host Nginx config (for reference)
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
└── Portfolio/                  # Angular application
    ├── src/
    ├── dist/                   # Build output (generated)
    └── ...
```

---

## Why this project

Setting up a server from scratch forces you to deal with problems that managed hosting abstracts away: networking, process isolation, certificate management, and deployment automation. Building and maintaining this gave me practical familiarity with the infrastructure layer, not just the application layer.
