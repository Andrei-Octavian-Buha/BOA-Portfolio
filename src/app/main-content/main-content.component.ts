import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";



@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, TestimonialComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
