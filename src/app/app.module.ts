import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './home/projects/projects.component';
import { MatIconModule } from '@angular/material/icon';
import { SkillsComponent } from './home/skills/skills.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { LinksComponent } from './home/links/links.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutMeComponent, ProjectsComponent, SkillsComponent, WorkExperienceComponent, LinksComponent],
    imports: [BrowserModule, MatDividerModule, AppRoutingModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatIconModule, HttpClientModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
