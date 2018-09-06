import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-term-input',
  templateUrl: './term-input.component.html',
  styleUrls: ['./term-input.component.css']
})

export class TermInputComponent implements OnInit {

  @Input()
  inputFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  mySubmit() {
    console.log('submit');
  }

}
