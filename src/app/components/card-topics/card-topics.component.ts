import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-topics',
  standalone: true,
  imports: [],
  templateUrl: './card-topics.component.html',
  styleUrl: './card-topics.component.scss'
})
export class CardTopicsComponent {
  @Input() nameTopic : string = '';
  @Input() subtitle : string = '';
  @Input() route : string = '';
  @Input() imgSrc : string = '';
}
