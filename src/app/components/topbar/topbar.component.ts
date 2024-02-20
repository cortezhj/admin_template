import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ButtonModule, RippleModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.sass'
})
export class TopbarComponent {

  menuValue: boolean = false

  openBar(){
    this.menuValue =! this.menuValue;
  }

  closeBar(){
    this.menuValue = false
  }

}
