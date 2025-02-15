import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from '../../../components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagram-to-code',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './diagram-to-code.component.html',
  styleUrl: './diagram-to-code.component.scss'
})
export class DiagramToCodeComponent {
  code: string = `#include <iostream>
using namespace std;

int main() {
    int a, b, suma;
    cout << "Ingrese dos numeros: ";
    cin >> a >> b;
    suma = a + b;
    cout << "La suma es: " << suma << endl;
    return 0;
}`;

  constructor(private router: Router) {}

  sendNext(event: Event) {
    event.preventDefault();
    this.router.navigate(['actividad/c++/id=5']);
  }

  copyCode() {
    const textArea = document.createElement('textarea');
    textArea.value = this.code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Código copiado al portapapeles');
  }
}
