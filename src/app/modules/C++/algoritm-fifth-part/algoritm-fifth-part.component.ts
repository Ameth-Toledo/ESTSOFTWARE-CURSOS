import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-algoritm-fifth-part',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './algoritm-fifth-part.component.html',
  styleUrl: './algoritm-fifth-part.component.scss'
})
export class AlgoritmFifthPartComponent {
  constructor ( private router : Router ) {}
  
  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/c++/id=5'])
  }
}
