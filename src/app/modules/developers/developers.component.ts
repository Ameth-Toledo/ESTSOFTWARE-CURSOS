import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.scss'
})
export class DevelopersComponent {

}
