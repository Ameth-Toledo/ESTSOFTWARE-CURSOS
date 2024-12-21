import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { CardComandosComponent } from "../../../components/card-comandos/card-comandos.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad06-linux',
  standalone: true,
  imports: [HeaderComponent, CardComandosComponent, FooterComponent],
  templateUrl: './actividad06-linux.component.html',
  styleUrl: './actividad06-linux.component.scss'
})
export class Actividad06LinuxComponent {
  constructor(private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/linux/id=7'])
  }
}
