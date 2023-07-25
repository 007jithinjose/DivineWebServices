import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  service: boolean = true;
  
  switchServiceUiUx() {
    this.service = false;
  }
  
  switchServiceWeb() {
    this.service = true;
  }

}
