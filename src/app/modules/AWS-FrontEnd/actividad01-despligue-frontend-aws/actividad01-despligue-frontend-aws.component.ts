import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { BannerComponent } from "../../../components/banner/banner.component";
import { Router } from '@angular/router';
import { CardTopicsComponent } from "../../../components/card-topics/card-topics.component";

@Component({
  selector: 'app-actividad01-despligue-frontend-aws',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent, CardTopicsComponent],
  templateUrl: './actividad01-despligue-frontend-aws.component.html',
  styleUrl: './actividad01-despligue-frontend-aws.component.scss'
})
export class Actividad01DespligueFrontendAwsComponent {
  constructor (private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['despliegue-front-aws/id=2']);
  }
}
