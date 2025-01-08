import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.scss'
})
export class DevelopersComponent {
  images = ['https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg',
    'https://cecytebcs.edu.mx/wp-content/uploads/2022/02/programacion.jpeg',
    'https://www.armadilloamarillo.com/wp-content/uploads/fondo-de-programacion-web_ok.jpg'
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex -1 + this.images.length) % this.images.length;
  }
}
