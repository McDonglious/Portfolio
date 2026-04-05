import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProjectService} from '../service/project-service';
import {Topbar} from '../topbar/topbar';
import {Footer} from '../footer/footer';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.html',
  styleUrls: ['./project-details.scss'],
  imports: [
    Topbar,
    Footer,
    CarouselModule
  ],
  standalone: true
})
export class ProjectDetails {
  project: any;
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.projectService.getProjectDetails(projectId).subscribe(data => {
      this.project = data;
      this.cdr.markForCheck();
      window.scrollTo({ top: 0 });
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}



