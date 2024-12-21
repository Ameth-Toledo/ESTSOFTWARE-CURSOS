import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {
  constructor (private router : Router) {}
  sendHome(event : Event) {
    event.preventDefault();
    this.router.navigate([''])
  }
}
