import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule, SocialIconsComponent, LogoComponent, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('500ms ease-out', style({ height: '100vh', opacity: 1})),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ height: '0', opacity: 0 })),
      ]),
    ])
  ]

})

export class NavBarComponent {
    selectedLang = 'en';
    isMenuOpen = false;



  constructor(private translate: TranslateService) {
    this.selectedLang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(this.selectedLang);
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  openMenu() {
    this.isMenuOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  // Just in case user navigates away or component is destroyed
  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
  }
}

