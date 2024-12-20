import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentacion-linux',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './documentacion-linux.component.html',
  styleUrl: './documentacion-linux.component.scss'
})
export class DocumentacionLinuxComponent {
  constructor(private router : Router) {}

  sendNext(event : Event) {
    event.preventDefault();
    this.router.navigate(['documentacion/linux/id=2'])
  }
}
