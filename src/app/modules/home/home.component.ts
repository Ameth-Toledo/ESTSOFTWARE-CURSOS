import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TerminalComponent } from "../../components/terminal/terminal.component";
import { CardCursosComponent } from "../../components/card-cursos/card-cursos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TerminalComponent, CardCursosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
