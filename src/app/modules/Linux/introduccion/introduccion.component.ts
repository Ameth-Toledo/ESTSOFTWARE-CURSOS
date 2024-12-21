import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { Router } from '@angular/router';
import { BannerComponent } from "../../../components/banner/banner.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './introduccion.component.html',
  styleUrl: './introduccion.component.scss'
})
export class IntroduccionComponent {
  constructor(private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['/actividad/linux/id=1'])
  }
}
