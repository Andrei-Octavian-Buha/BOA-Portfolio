import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, TestimonialComponent, FooterComponent, NavBarComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
}

