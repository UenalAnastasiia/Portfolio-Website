import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      'img': 'javascript.png',
      'name': 'JavaScript'
    },

    {
      'img': 'typescript.png',
      'name': 'TypeScript'
    },

    {
      'img': 'angular.png',
      'name': 'Angular'
    },
    
    {
      'img': 'react.png',
      'name': 'React'
    },

    {
      'img': 'python.png',
      'name': 'Python'
    },

    {
      'img': 'django.png',
      'name': 'Django'
    },

    {
      'img': 'datenbank.png',
      'name': 'Database'
    },
    
    {
      'img': 'html.png',
      'name': 'HTML / CSS'
    },
    
    {
      'img': 'scrum.png',
      'name': 'SCRUM'
    },
    
    {
      'img': 'git.png',
      'name': 'Git'
    },
    
    {
      'img': 'design.png',
      'name': 'Material Design'
    },
    
    {
      'img': 'api.png',
      'name': 'Rest API'
    },

    {
      'img': 'redis.png',
      'name': 'Redis'
    },

    {
      'img': 'linux.png',
      'name': 'Linux'
    },

    {
      'img': 'firebase.png',
      'name': 'Firebase'
    },
  ]

  constructor() { }

  ngOnInit(): void {}

}