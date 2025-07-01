import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { ProjectService } from '../../service/project.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule} from '@angular/router';
@Component({
  selector: 'app-project-list',
  imports: [CommonModule, NavBarComponent, RouterModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProjectById(id!);
  }
}
