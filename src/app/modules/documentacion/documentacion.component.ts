import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardDocumentationComponent } from "../../components/card-documentation/card-documentation.component";

@Component({
  selector: 'app-documentacion',
  standalone: true,
  imports: [HeaderComponent, CardDocumentationComponent],
  templateUrl: './documentacion.component.html',
  styleUrl: './documentacion.component.scss'
})
export class DocumentacionComponent {

}
