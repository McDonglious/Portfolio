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
    { name: "Email", url: "mailto:sanderdemiddelaer@hotmail.com", icon: "✉️" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sander-de-middelaer-424437357", icon: "💼" },
    { name: "GitHub", url: "https://github.com/McDonglious", icon: "🐙" }
  ];
}
