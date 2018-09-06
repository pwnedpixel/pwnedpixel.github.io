import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TerminalComponent } from './terminal.component';
import { TermBodyComponent } from './term-body/term-body.component';
import { TermInputComponent } from './term-input/term-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HeaderComponent, TerminalComponent, TermBodyComponent, TermInputComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [TerminalComponent]
})
export class TerminalModule { }
