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
  developers = [
    {
      name: 'Ameth de Jesus Mendez Toledo',
      role: 'Programador FullStack',
      education: 'Ingenieria en Software',
      github: 'https://github.com/ameth',
      linkedin: 'https://linkedin.com/in/ameth',
      portfolio: 'https://ameth-portfolio.com',
      image: 'Developers/prueba.png'
    },
    {
      name: 'Victor Fabricio Perez Constantino',
      role: 'Programador FullStack',
      education: 'Ingenieria en Software',
      github: 'https://github.com/victor',
      linkedin: 'https://linkedin.com/in/victor',
      portfolio: 'https://victor-portfolio.com',
      image: 'Developers/prueba.png'
    },
    {
      name: 'Christopher Osuna Vazquez',
      role: 'Programador BackEnd',
      education: 'Ingenieria en Software',
      github: 'https://github.com/ChrisOzuna10',
      linkedin: 'https://www.linkedin.com/in/christopher-ozuna-0828b42a0/',
      portfolio: 'https://christopher-portfolio.com',
      image: 'Developers/Chris.png'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.developers.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.developers.length) % this.developers.length;
  }

  sendToGitHub(url: string) {
    window.open(url, '_blank');
  }

  sendToLinkedIn(url: string) {
    window.open(url, '_blank');
  }

  sendToPortfolio(url: string) {
    window.open(url, '_blank');
  }
}
