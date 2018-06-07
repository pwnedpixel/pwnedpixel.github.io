import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermBodyComponent } from './term-body.component';

describe('TermBodyComponent', () => {
  let component: TermBodyComponent;
  let fixture: ComponentFixture<TermBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
