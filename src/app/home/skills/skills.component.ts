import { Component, OnInit } from '@angular/core';

class Skill {
  name: string;
  level: number;
  circles = [];
  constructor(name, level) {
    this.name = name;
    for (let i = 0; i < level; i++) {
      this.circles.push('1');
    }
    for (let i = 5 - level; i > 0; i--) {
      this.circles.push('0');
    }
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor() {
  }

  getSkills(column: number) {
    const leftColumn = [];
    const rightColumn = [];
    const sortedSkills = this.skills.sort((sk1, sk2) => {
      return sk2.level - sk1.level;
    });
    for (let i = 0; i < this.skills.length; i++) {
      if (i < this.skills.length / 2) {
        leftColumn.push(this.skills[i]);
      } else {
        rightColumn.push(this.skills[i]);
      }
    }
    return column === 0 ? leftColumn : rightColumn;
  }

  ngOnInit() {
    this.skills.push(new Skill('HTML/JS/CSS', 5));
    this.skills.push(new Skill('Java', 4));
    this.skills.push(new Skill('Python', 4));
    this.skills.push(new Skill('Agile Development', 4));
    this.skills.push(new Skill('Angular & React', 3));
    this.skills.push(new Skill('Git', 3));
    this.skills.push(new Skill('Maven', 3));
    this.skills.push(new Skill('SQL', 2));
    this.skills.push(new Skill('JBoss', 2));
    this.skills.push(new Skill('C# & C++', 1));
  }

}
