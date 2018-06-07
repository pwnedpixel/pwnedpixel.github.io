import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TerminalComponent } from './terminal.component';
import { TermBodyComponent } from './term-body/term-body.component';

@NgModule({
    declarations: [HeaderComponent, TerminalComponent, TermBodyComponent],
    exports: [TerminalComponent]
})
export class TerminalModule { }