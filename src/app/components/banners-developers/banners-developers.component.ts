import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banners-developers',
  standalone: true,
  imports: [],
  templateUrl: './banners-developers.component.html',
  styleUrl: './banners-developers.component.scss'
})
export class BannersDevelopersComponent { 
  @Input() developer_name : string = '';
  @Input() developer_role : string = '';
  @Input() developer_education : string = '';
  @Input() developer_image : string = '';

  
}
