import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-documentation',
  standalone: true,
  imports: [],
  templateUrl: './card-documentation.component.html',
  styleUrl: './card-documentation.component.scss'
})
export class CardDocumentationComponent {
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
