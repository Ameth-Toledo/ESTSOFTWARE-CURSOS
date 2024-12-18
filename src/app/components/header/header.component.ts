import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router : Router){}

  toggleMenu() {
    this.menuOpen =  !this.menuOpen;
  }

  sendHome(event : Event) {
    event.preventDefault();
    this.router.navigate([''])
  }

  sendCourses(event : Event) {
    event.preventDefault();
    this.router.navigate(['/cursos'])
  }

  sendDevs(event : Event) {
    event.preventDefault();
    this.router.navigate(['/developers'])
  }

  sendDocumentation(event : Event) {
    event.preventDefault();
    this.router.navigate(['/documentation'])
  }

  sendLogin(event : Event) {
    event.preventDefault();
    this.router.navigate(['/login']); 
  }
}
