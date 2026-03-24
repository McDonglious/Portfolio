import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'about',
    renderMode: RenderMode.Prerender, // Prerender static pages
  },
  {
    path: 'projects/:id',
    renderMode: RenderMode.Server // Dynamically render routes with parameters
  },
  {
    path: '**',
    renderMode: RenderMode.Server, // Fallback for all other routes
  }
];
