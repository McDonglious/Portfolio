import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true
})
export class Contact {
  links = [
    { name: "Email", url: "mailto:your-email@example.com", icon: "✉️" },
    { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "💼" },
    { name: "GitHub", url: "https://github.com/your-username", icon: "🐙" }
  ];
}
