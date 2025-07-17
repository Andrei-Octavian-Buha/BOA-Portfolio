import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor( private translate: TranslateService) { }
  private projects = [
  { 
    id: "join",
    title: 'Join',
    descriptionKey: 'projects.join.description',
    implementationKey: 'projects.join.implementation',
    img: '/assets/img/Join.png',
    imgBg: '/assets/img/joinBG.jpg',
        skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/join.git',
    demoLink: 'https://join.andreibuha.com',
    duration: 5,
        demo:true,
    logo: false,
    featured: true
  },
  { 
    id: "el-pollo-loco",
    title: 'El Pollo Loco',
    descriptionKey: 'projects.elPolloLoco.description',
    implementationKey: 'projects.elPolloLoco.implementation',
    img: '/assets/img/elPolloLoco.png',
    imgBg: '/assets/img/elPolloLoco.png',
    skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    demoLink: 'https://elpolloloco.andreibuha.com',
    duration: 3,
        demo:true,
    logo: true,
    featured: false
  },
  { 
    id: "dabubble",
    title: 'DaBubble',
    descriptionKey: 'projects.dabubble.description',
        implementationKey: 'projects.dabubble.implementation',
    img: '/assets/img/daBubble.png',
    imgBg: '/assets/img/daBubble.png',
        skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
        {src:'ts', alt:'Typescript'},
        {src:'angular', alt:'Angular'},
        {src:'firebase', alt:'Firebase'}
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    duration: 0,
    demo:false,
    logo: true,
    featured: false
  }
  ];

getProjects() {
  return this.projects;
}

getProjectById(id: string) {
  return this.projects.find(p => p.id === id);
}

getNextProjectId(id: string | null){
  const currentIndex = this.projects.findIndex(p => p.id === id);
  const nextIndex = (currentIndex + 1) % this.projects.length;
  return this.projects[nextIndex].id;
}
}
