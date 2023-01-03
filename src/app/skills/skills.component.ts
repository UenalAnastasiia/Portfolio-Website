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
      'img': 'angular.png',
      'name': 'Angular'
    },
    
    {
      'img': 'typescript.png',
      'name': 'TypeScript'
    },
    
    {
      'img': 'html.png',
      'name': 'HTML'
    },
    
    {
      'img': 'css.png',
      'name': 'CSS'
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
      'img': 'firebase.png',
      'name': 'Firebase'
    }
  ]

  constructor() { }

  ngOnInit(): void {}

}