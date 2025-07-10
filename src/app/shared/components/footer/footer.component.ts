import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { LogoComponent } from "../logo/logo.component";
import { RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ContactFormComponent, LogoComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  logoHoverd: boolean = false;
  hoveredIndex: number | null = null;
  socialLinks = [
    {label:'GitHub', 
    imgSrc: 'gitImg.png',
    link: 'https://github.com/Andrei-Octavian-Buha'},
    {label:'LinkedIn', 
    imgSrc: 'linkImg.png',
      link: 'https://www.linkedin.com/in/andrei-octavian-buha-27a0362ba/'},

    {label:'Email', 
      imgSrc: 'mailImg.png',
      link: 'mailto:andrei.buha@patrazel.dev'}];

      constructor(    private route: ActivatedRoute,) { }
}
