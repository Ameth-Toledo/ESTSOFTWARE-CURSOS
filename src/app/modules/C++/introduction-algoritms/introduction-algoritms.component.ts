import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction-algoritms',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './introduction-algoritms.component.html',
  styleUrl: './introduction-algoritms.component.scss'
})
export class IntroductionAlgoritmsComponent {
  constructor ( private router : Router ) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['/'])
  }
}
