import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { CardComandosComponent } from "../../../components/card-comandos/card-comandos.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad05-linux',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComandosComponent],
  templateUrl: './actividad05-linux.component.html',
  styleUrl: './actividad05-linux.component.scss'
})
export class Actividad05LinuxComponent {
  constructor(private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/linux/id=6'])
  }
}
