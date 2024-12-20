import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  feedback: string = '';
  forbiddenWords: string[] = ['chinga tu madre', 'mierda', 'cagada', 'estúpido', 'estupidez', 'pendejos', 'pendejo', 'idiotas', 'malditos'];

  modalVisible: boolean = false;
  modalMessage: string = '';
  modalIcon: string = '';

  validateFeedback(): boolean {
    const feedbackLower = this.feedback.toLowerCase();

    for (let word of this.forbiddenWords) {
      if (feedbackLower.includes(word)) {
        this.showModal('Tu mensaje contiene palabras inapropiadas. Por favor, modifícalo.', 'fas fa-exclamation-circle');
        return false;
      }
    }

    return true;
  }

  onSubmit() {
    if (this.validateFeedback()) {
      this.showModal('¡Gracias por tu feedback!', 'fas fa-check-circle');
      console.log('Feedback enviado:', this.feedback);
      this.feedback = ''; 
    }
  }

  showModal(message: string, icon: string) {
    this.modalMessage = message;
    this.modalIcon = icon;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }
}