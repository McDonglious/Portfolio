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
        "Refactored a legacy **WinForms** application (1000+ lines per file, .NET 4) used by technicians to configure air compressor controllers, improving maintainability and performance.",
        "Migrated the system to a modern architecture: **.NET 8 communication library**, **.NET 9 backend**, and **React + Vite frontend**.",
        "Optimized controller communication by replacing **UDP** with **TCP**, reducing configuration file load times from **30 seconds to 0.3 seconds**.",
        "Decoded and processed **binary strings** from controller files, mapping bits to fields using external metadata (DataCore).",
        "Collaborated in a remote team to analyze complex logic, synthesize requirements, and organize tasks for a large-scale refactor.",
        "Gained hands-on experience with **TCP/UDP protocols**, binary data parsing, and integrating legacy systems with modern frameworks."
      ]
    },
    {
      title: "Driver and Janitor",
      company: "Flegado (Care Center for Individuals with Disabilities)",
      dates: "2016 – 2017", // Approximate year based on your timeline
      tasks: [
        "Provided transportation for residents with disabilities, ensuring safe and punctual pick-up and drop-off to/from the care center.",
        "Created a positive and engaging atmosphere during transit, building rapport and trust with residents.",
        "Performed facility maintenance tasks, including cleaning, minor repairs, and organizing spaces to ensure a safe and welcoming environment.",
        "Demonstrated adaptability, patience, and strong interpersonal skills in a caring and dynamic setting."
      ]
    },
    {
      title: "Delivery Driver",
      company: "DM Logistics",
      dates: "2016 – Mid-2017",
      tasks: [
        "Executed daily delivery routes, ensuring timely and accurate pick-up and drop-off of packages.",
        "Navigated efficiently using provided routes, adapting to changes or delays with minimal disruption.",
        "Maintained a professional and friendly demeanor with clients, contributing to a positive experience."
      ]
    },
    {
      title: "Laboratory Assistant and Warehouse Operator",
      company: "MacBen (Concrete Measuring Equipment)",
      dates: "2011 – 2016",
      tasks: [
        "Assisted in laboratory testing and calibration of concrete measuring equipment, ensuring accuracy and compliance with standards.",
        "Managed warehouse operations, including inventory organization, order preparation, and shipping to customers.",
        "Operated company van to transport equipment for repairs, recertification, or delivery, maintaining punctuality and care.",
        "Demonstrated attention to detail and reliability in handling technical equipment and customer orders."
      ]
    }
  ];
}
