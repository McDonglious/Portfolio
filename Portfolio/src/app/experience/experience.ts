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
      company: "Atlas Copco",
      dates: "October 2025 – December 2025",
      tasks: [
        "Refactored a legacy WinForms application (.NET 4, 1000+ lines per file) used by technicians to configure air compressor controllers — improving maintainability as the first step toward a full migration.",
        "Migrated the system to a modern stack: .NET 8 communication library, .NET 9 backend, and React + Vite frontend.",
        "Replaced UDP with TCP for controller communication, reducing configuration file load times from 30 seconds to 0.3 seconds.",
        "Built a binary protocol parser that deserializes packed hex strings output by the controllers into named settings — using controller-type-specific metadata from an external DataCore system to know how to interpret each segment of bits.",
        "Worked in a remote team on a large-scale legacy refactor, navigating undocumented code and complex existing logic."
      ]
    },
    {
      title: "Various Non-Technical Roles",
      company: "Flegado, DM Logistics, MacBen",
      dates: "2011 – 2017",
      tasks: [
        "Care transport driver at a disability care center, delivery driver, and laboratory/warehouse assistant at a concrete equipment company."
      ]
    }
  ];
}
