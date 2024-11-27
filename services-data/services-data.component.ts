import { Component,Input } from '@angular/core';
import { services } from '../services';

@Component({
  selector: 'app-services-data',
  templateUrl: './services-data.component.html',
  styleUrl: './services-data.component.css'
})
export class ServicesDataComponent {
  @Input() services: services[] = [];
}
