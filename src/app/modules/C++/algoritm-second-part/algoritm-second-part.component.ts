import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-algoritm-second-part',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './algoritm-second-part.component.html',
  styleUrl: './algoritm-second-part.component.scss'
})
export class AlgoritmSecondPartComponent {
    constructor ( private router : Router ) {}
  
  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['/'])
  }
}
