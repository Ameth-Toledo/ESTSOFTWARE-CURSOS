import { Component } from '@angular/core';
import { Input } from '@angular/core';

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
}
