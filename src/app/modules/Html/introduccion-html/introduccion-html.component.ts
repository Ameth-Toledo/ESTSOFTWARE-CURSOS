import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { BannerComponent } from "../../../components/banner/banner.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router

 } from '@angular/router';
@Component({
  selector: 'app-introduccion-html',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './introduccion-html.component.html',
  styleUrl: './introduccion-html.component.scss'
})
export class IntroduccionHtmlComponent {
  constructor (private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['actividad/html/id=1'])
  }

}
