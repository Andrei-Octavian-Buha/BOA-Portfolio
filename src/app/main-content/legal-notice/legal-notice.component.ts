import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, NavBarComponent, RouterModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private route: ActivatedRoute) { 
  }
}
