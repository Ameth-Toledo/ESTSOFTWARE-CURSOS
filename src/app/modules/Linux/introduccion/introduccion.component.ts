import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { Router } from '@angular/router';
import { BannerComponent } from "../../../components/banner/banner.component";

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
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
