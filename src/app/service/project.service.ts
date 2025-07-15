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
    description: 'Take a look at my projects — built with a focus on responsive design, user-friendly interfaces, and clean, efficient code. Feel free to explore, test, and share your feedback!',
    img: '/assets/img/Join.png',
    imgBg: '/assets/img/joinBG.jpg',
        skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/join.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/join.git',
    duration: 3,
    logo: true,
    featured: false
  },
  { 
    id: "el-pollo-loco",
    title: 'El Pollo Loco',
        descriptionKey: 'projects.elPolloLoco.description',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen./',
    img: '/assets/img/elPolloLoco.png',
    imgBg: '/assets/img/elPolloLoco.png',
    skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    duration: 5,
    logo: true,
    featured: false
  },
  { 
    id: "dabubble",
    title: 'DaBubble',
        descriptionKey: 'projects.dabubble.description',
    description: 'Take a look at my projects — built with a focus on responsive design, user-friendly interfaces, and clean, efficient code. Feel free to explore, test, and share your feedback!',
    img: '/assets/img/daBubble.png',
    imgBg: '/assets/img/daBubble.png',
        skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    duration: 3, 
    logo: false,
    featured: true
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
