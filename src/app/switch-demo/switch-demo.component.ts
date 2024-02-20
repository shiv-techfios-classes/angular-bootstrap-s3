import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.css'
})
export class SwitchDemoComponent {

  day:number = new Date().getDay();

}
