import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-comandos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-comandos.component.html',
  styleUrl: './card-comandos.component.scss'
})
export class CardComandosComponent {
  @Input() comand: string = '';
  isModalVisible : boolean = false;
  comandCopied : string = '';

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.comandCopied = text
      this.showModal();
    }).catch(err => {
      console.error('Error al copiar al portapapeles', err);
    });
  }

  showModal():void {
    this.isModalVisible = true;
    setTimeout(() => {
      this.isModalVisible = false;
      this.comandCopied = '';
    }, 3000);
  }
}
