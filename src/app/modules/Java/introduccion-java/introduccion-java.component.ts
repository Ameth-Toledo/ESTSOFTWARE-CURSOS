import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { BannerComponent } from "../../../components/banner/banner.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduccion-java',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './introduccion-java.component.html',
  styleUrl: './introduccion-java.component.scss'
})
export class IntroduccionJavaComponent {
  constructor(private router: Router){}

  sendNext(event: Event) {
    event.preventDefault();
    this.router.navigate(["actividad1/java/id=1"])
  }
}
