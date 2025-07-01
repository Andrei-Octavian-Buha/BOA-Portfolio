import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
isSmallScreen = window.innerWidth <= 760;

hoverIndex: number | null = null;
hoverTimeout: any;
projects: any[] = [];

 constructor(private projectService: ProjectService) {}


ngOnInit(): void {
  this.projects = this.projectService.getProjects();
}

onMouseEnter(index: number) {
  this.hoverTimeout = setTimeout(() => {
    this.hoverIndex = index;
  }, 300); // delay in ms
}

onMouseLeave() {
  clearTimeout(this.hoverTimeout);
  this.hoverIndex = null;
}

}
