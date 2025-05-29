import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

hoverIndex: number | null = null;
hoverTimeout: any;
projects = [
  { 
    title: 'Join',
    description: 'Take a look at my projects — built with a focus on responsive design, user-friendly interfaces, and clean, efficient code. Feel free to explore, test, and share your feedback!',
    img: '/assets/img/Join.png' 
  },
  { 
    title: 'El Pollo Loco',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen./',
    img: '/assets/img/elPolloLoco.png' 
  },
  { 
    title: 'DaBubble',
    description: 'Take a look at my projects — built with a focus on responsive design, user-friendly interfaces, and clean, efficient code. Feel free to explore, test, and share your feedback!',
    img: '/assets/img/daBubble.png' 
  }
];

onMouseEnter(index: number) {
  this.hoverTimeout = setTimeout(() => {
    this.hoverIndex = index;
  }, 300); // delay in ms
}

onMouseLeave() {
  clearTimeout(this.hoverTimeout);
  this.hoverIndex = null;
}

}
