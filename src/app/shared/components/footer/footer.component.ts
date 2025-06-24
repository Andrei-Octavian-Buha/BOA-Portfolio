import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ContactFormComponent, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  logoHoverd: boolean = false;
  hoveredIndex: number | null = null;
  socialLinks = [
    {label:'GitHub', 
    imgSrc: 'gitImg.png'},
    {label:'LinkedIn', 
    imgSrc: 'linkImg.png'},

    {label:'Email', 
      imgSrc: 'mailImg.png'}];
}
