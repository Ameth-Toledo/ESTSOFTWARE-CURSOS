import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";

@Component({
  selector: 'app-algoritm-third-part',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './algoritm-third-part.component.html',
  styleUrl: './algoritm-third-part.component.scss'
})
export class AlgoritmThirdPartComponent {
  constructor ( private router : Router ) {}
  
  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/c++/id=3'])
  }
}
