import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';
import { CardComandosComponent } from "../../../components/card-comandos/card-comandos.component";

@Component({
  selector: 'app-actividad01-html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComandosComponent],
  templateUrl: './actividad01-html.component.html',
  styleUrl: './actividad01-html.component.scss'
})
export class Actividad01HtmlComponent {
  constructor (private router : Router) {}
    
  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/html/id=2'])
  }
}
