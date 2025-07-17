import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { ProjectService } from '../../service/project.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, NavBarComponent, RouterModule,  TranslateModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  project: any;
  nextProjectId: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id !== null) {
        this.project = this.projectService.getProjectById(id);
        this.nextProjectId = this.projectService.getNextProjectId(id);
      } else {
        this.project = null;
        this.nextProjectId = '';
      }
    });
  }
}
