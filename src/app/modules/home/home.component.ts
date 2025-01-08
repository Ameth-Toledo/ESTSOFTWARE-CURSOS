import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TerminalComponent } from "../../components/terminal/terminal.component";
import { CardCursosComponent } from "../../components/card-cursos/card-cursos.component";
import { Router } from '@angular/router';
import { BannerComponent } from "../../components/banner/banner.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PaypalService } from '../../services/paypal/paypal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, TerminalComponent, CardCursosComponent, BannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  donationAmount : number = 0;
  images = ['https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg',
    'https://cecytebcs.edu.mx/wp-content/uploads/2022/02/programacion.jpeg',
    'https://www.armadilloamarillo.com/wp-content/uploads/fondo-de-programacion-web_ok.jpg'
  ];
  currentIndex = 0;

  constructor (private router : Router, private paypalService: PaypalService) {}

  ngAfterViewInit(): void {
    this.initializePaypalButton();
  }
  
  private initializePaypalButton() {
    this.paypalService.loadPaypalScript().then(() => {
      // @ts-ignore: PayPal object is loaded dynamically
      paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'donate',
        },
        createOrder: (data: any, actions: any) => {
          if (this.donationAmount <= 0) {
            alert('Por favor, ingresa un monto válido para donar.');
            throw new Error('Monto de donación inválido');
          }
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.donationAmount.toFixed(2), 
                  currency_code: 'MXN',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert(`Gracias por tu donación, ${details.payer.name.given_name}!`);
          });
        },
        onError: (err: any) => {
          console.error('Error en la transacción de PayPal:', err);
          alert('Hubo un error procesando tu donación. Por favor, intenta nuevamente.');
        },
      }).render('#paypal-button-container');
    }).catch(err => {
      console.error('Error al cargar el script de PayPal:', err);
    });
  }

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
