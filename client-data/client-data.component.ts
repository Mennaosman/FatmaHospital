import { Component, Input } from '@angular/core';
import{ Client } from './../client';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrl: './client-data.component.css'
})
export class ClientDataComponent {
  @Input() clients: Client[] = [];

 

  modalContent: string[] = [];

  handleClick(event: MouseEvent, clientId: number) {
  
    for (let i = 0; i < this.clients.length; i++) {
      if(clientId === this.clients[i].id)
      {
        this.modalContent = this.clients[i].subclient;  // Display array of companies
      }
  }

  }


}
