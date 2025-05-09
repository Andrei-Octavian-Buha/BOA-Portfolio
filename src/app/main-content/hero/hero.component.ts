import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from "../../shared/components/social-icons/social-icons.component";

@Component({
  selector: 'app-hero',
  imports: [CommonModule, SocialIconsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  
}
