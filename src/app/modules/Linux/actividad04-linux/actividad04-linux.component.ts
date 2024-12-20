import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { CardComandosComponent } from "../../../components/card-comandos/card-comandos.component";

@Component({
  selector: 'app-actividad04-linux',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CardComandosComponent],
  templateUrl: './actividad04-linux.component.html',
  styleUrl: './actividad04-linux.component.scss'
})
export class Actividad04LinuxComponent {
  constructor(private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/linux/id=5'])
  }
}
