import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TerminalComponent } from "../../components/terminal/terminal.component";
import { CardCursosComponent } from "../../components/card-cursos/card-cursos.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TerminalComponent, CardCursosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor (private router : Router) {}

  sendCourseLinux(event : Event) {
    event.preventDefault();
    this.router.navigate(['/introduccion/linux'])
  }

  ViewPluCourses(event : Event) {
    event.preventDefault();
    this.router.navigate(['/cursos'])
  }
}
