import { Component, OnInit, Input } from '@angular/core';
import { Command } from '../model/command.model';

@Component({
  selector: 'app-term-body',
  templateUrl: './term-body.component.html',
  styleUrls: ['./term-body.component.css']
})
export class TermBodyComponent implements OnInit {
  commands: Array<Command> = [];

  constructor() {
    this.commands = [
      {
        input: 'ls',
        output: [{ text: 'resume, projects, contact' }]
      },
      {
        input: 'resume',
        output: [{ text: 'Andy Keech', style: 'bold' },
        { text: '|  Education:', style: 'bold' },
        { text: '|    4th year computer engineering student' },
        { text: '|  Work experience:', style: 'bold' },
        { text: '|    TD: software Developer Intern:' },
        { text: '|     -worked on stuff' },
        { text: '|     -used java, typescript and stuff' }]
      },
      {
        input: 'contact',
        output: [{ text: 'Email: Andy@akeech.com' }, { text: 'Phone: (226) 236-6662' }]
      }
    ];
  }

  ngOnInit() {
  }

}
