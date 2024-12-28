import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';
import { BannerComponent } from "../../../components/banner/banner.component";

@Component({
  selector: 'app-introduction-algoritms',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent],
  templateUrl: './introduction-algoritms.component.html',
  styleUrl: './introduction-algoritms.component.scss'
})
export class IntroductionAlgoritmsComponent {
  constructor ( private router : Router ) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/c++/id=1'])
  }
}
