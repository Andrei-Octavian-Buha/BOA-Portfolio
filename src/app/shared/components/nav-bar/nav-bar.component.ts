import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule , LogoComponent , MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
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

  openMenu(){
    this.isMenuOpen = true;
    console.log("am apasat pe buton");
    
  }

   toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}

