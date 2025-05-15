import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible; // Inversează valoarea
  }

  images:Array <string> =['html','css','js','ts','angular','firebase','git','api','scrum','materialDesign'];

  objImages:Array<{src: string, alt: string}> = [
    {src:'html', alt:'HTML'},
    {src:'css', alt:'CSS'},
    {src:'js', alt:'JavaScript'},
    {src:'ts', alt:'Typescript'},
    {src:'angular', alt:'Angular'},
    {src:'firebase', alt:'Firebase'},
    {src:'git', alt:'GIT'},
    {src:'api', alt:'API'},
    {src:'scrum', alt:'Scrum'},
    {src:'materialDesign', alt:'Material Design'},
  ];

}
