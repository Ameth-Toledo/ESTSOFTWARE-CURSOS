import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad02-despligue-frontend-aws',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './actividad02-despligue-frontend-aws.component.html',
  styleUrl: './actividad02-despligue-frontend-aws.component.scss'
})
export class Actividad02DespligueFrontendAwsComponent {
  constructor (private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['despliegue-front-aws/id=2']);
  }
}
