import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Projects;

  getJSON(): Observable<any> {
    return this.http.get('./assets/content.json');
  }

  buildProjects(data) {
    this.projects = data;
    console.log(this.projects);
  }

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.buildProjects(data);
  });
  }

  ngOnInit() {

  }

}

class Projects {
  projects: Project[] = [];

  public getProjects() {
    return this.projects;
  }
}

class Project {
  title: string;
  subtitle: string;
  info: string[];

  constructor(title, subtitle, info = []) {
    this.title = title;
    this.subtitle = subtitle;
    this.info = info;
  }
}
