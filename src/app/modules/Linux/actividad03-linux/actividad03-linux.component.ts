import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { CardComandosComponent } from "../../../components/card-comandos/card-comandos.component";

@Component({
  selector: 'app-actividad03-linux',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CardComandosComponent],
  templateUrl: './actividad03-linux.component.html',
  styleUrl: './actividad03-linux.component.scss'
})
export class Actividad03LinuxComponent {
  constructor(private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/linux/id=4'])
  }
}
