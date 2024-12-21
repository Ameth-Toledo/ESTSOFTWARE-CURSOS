import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() imageSrc : string = '';
  @Input() text01 : string = '';
  @Input() text02 : string = '';
  @Input() frase : string = '';
}
