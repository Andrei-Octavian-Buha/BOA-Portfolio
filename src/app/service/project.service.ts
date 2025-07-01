import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  private projects = [
  { 
    id: "join",
    title: 'Join',
    description: 'Take a look at my projects — built with a focus on responsive design, user-friendly interfaces, and clean, efficient code. Feel free to explore, test, and share your feedback!',
    img: '/assets/img/Join.png',
    skills: ['html','js'],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/join.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/join.git',
    duration: 3,
  },
  { 
    id: "el-pollo-loco",
    title: 'El Pollo Loco',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen./',
    img: '/assets/img/elPolloLoco.png',
    skills: [
        {src:'js', alt:'JavaScript'},
        {src:'html', alt:'HTML'},
        {src:'css', alt:'CSS'},
    ],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    duration: 5,
  },
  { 
    id: "dabubble",
    title: 'DaBubble',
    description: 'Take a look at my projects — built with a focus on responsive design, user-friendly interfaces, and clean, efficient code. Feel free to explore, test, and share your feedback!',
    img: '/assets/img/daBubble.png',
        skills: ['html','js'],
    gitLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    demoLink: 'https://github.com/Andrei-Octavian-Buha/El-Pollo-Loco.git',
    duration: 3, 
  }
  ];

    getProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    return this.projects.find(p => p.id === id);
  }

  
}
