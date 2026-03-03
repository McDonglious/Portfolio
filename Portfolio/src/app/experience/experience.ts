import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  standalone: true
})
export class Experience {
  jobs = [
    {
      title: "IT Intern",
      company: "Example Tech",
      dates: "2025 – Present",
      tasks: [
        "Developed and documented REST APIs for housing location data.",
        "Collaborated with team members to analyze requirements and synthesize information.",
        "Containerized applications using Docker for streamlined deployment.",
        "Assisted in troubleshooting and optimizing database performance."
      ]
    },
    {
      title: "Professional Driver",
      company: "Logistics Co.",
      dates: "2022 – 2024",
      tasks: [
        "Managed complex logistics and prioritized safety and efficiency.",
        "Adapted quickly to new systems and workflows."
      ]
    }
  ];
}
