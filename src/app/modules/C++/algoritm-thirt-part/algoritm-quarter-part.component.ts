import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-algoritm-quarter-part',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './algoritm-quarter-part.component.html',
  styleUrl: './algoritm-quarter-part.component.scss'
})
export class AlgoritmThirtPartComponent {
  constructor ( private router : Router ) {}
  
  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/c++/id=3'])
  }
}
