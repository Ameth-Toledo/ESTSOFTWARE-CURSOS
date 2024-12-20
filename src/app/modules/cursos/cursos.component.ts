import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardCursosComponent } from "../../components/card-cursos/card-cursos.component";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [HeaderComponent, CardCursosComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
