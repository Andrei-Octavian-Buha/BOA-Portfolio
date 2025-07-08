import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectListComponent } from './main-content/project-list/project-list.component';
import { LegalNoticeComponent } from './main-content/legal-notice/legal-notice.component';
export const routes: Routes = [
    {   path: '', 
            component: MainContentComponent,
            title: 'Home - BOA Portfolio',
        },
        {   path: 'projects/:id', 
            component: ProjectListComponent,
            title: 'Home - BOA Portfolio',
        },
        {
            path: 'legal-notice',
            component: LegalNoticeComponent, 
            title: 'Legal Notice - BOA Portfolio',
        }
];
