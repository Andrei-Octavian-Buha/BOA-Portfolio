import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  private   objImages = [
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
