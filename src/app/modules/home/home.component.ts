import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TerminalComponent } from "../../components/terminal/terminal.component";
import { CardCursosComponent } from "../../components/card-cursos/card-cursos.component";
import { Router } from '@angular/router';
import { BannerComponent } from "../../components/banner/banner.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, TerminalComponent, CardCursosComponent, BannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  images = ['https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg',
    'https://cecytebcs.edu.mx/wp-content/uploads/2022/02/programacion.jpeg',
    'https://www.armadilloamarillo.com/wp-content/uploads/fondo-de-programacion-web_ok.jpg',
    'prueba/png.png'
  ];
  currentIndex = 0;

  constructor (private router : Router) {}

  sendCourseLinux(event : Event) {
    event.preventDefault();
    this.router.navigate(['/introduccion/linux'])
  }

  ViewPluCourses(event : Event) {
    event.preventDefault();
    this.router.navigate(['/cursos'])
  }

  sendDevelopers(event : Event) {
    event.preventDefault();
    this.router.navigate(['/developers']);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex -1 + this.images.length) % this.images.length;
  }
}
