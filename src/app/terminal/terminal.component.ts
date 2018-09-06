import { Component, OnInit, AfterViewInit, Input, EventEmitter } from '@angular/core';
import { Command } from './model/command.model';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  inputForm: FormControl;
  inputFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.inputForm = new FormControl('');
    this.inputForm.valueChanges.subscribe(newValue => {
      if (newValue) {
        console.log(newValue);
      }
    });
    this.inputFormGroup = new FormGroup({inputForm: this.inputForm});
  }

  commandEvent(input: string) {
    console.log('command input: ' + input);
  }

}
