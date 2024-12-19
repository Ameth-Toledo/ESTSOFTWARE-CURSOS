import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-cursos',
  standalone: true,
  imports: [],
  templateUrl: './card-cursos.component.html',
  styleUrl: './card-cursos.component.scss'
})
export class CardCursosComponent {
  @Input() image: string = '';
  @Input() courseName: string = '';
  @Input() topics: string = '';
  @Input() route: string = '';

  constructor (private router : Router) {}

  navigateToCourse(event : Event) {
    event.preventDefault();
    if (this.route) {
    this.router.navigate([this.route])
    } else {
      console.warn('Ruta no definida para este curso.')
    }
  }
}
