import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectListComponent } from './main-content/project-list/project-list.component';
export const routes: Routes = [
    {   path: '', 
        component: MainContentComponent,
        title: 'Home - BOA Portfolio',
        },
        {   path: 'projects/:id', 
        component: ProjectListComponent,
        title: 'Home - BOA Portfolio',
        },
];
