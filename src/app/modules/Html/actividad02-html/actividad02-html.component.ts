import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad02-html',
  standalone: true,
  imports: [],
  templateUrl: './actividad02-html.component.html',
  styleUrl: './actividad02-html.component.scss'
})
export class Actividad02HtmlComponent {
  constructor( private router : Router ){}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/html/id=3'])
  }
}
