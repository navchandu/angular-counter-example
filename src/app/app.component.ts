import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChildComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.html'
})
export class AppComponent {
  title = 'send data child to parent component';
  data = 10;

  updateChild()  
  {
    this.data = Math.floor(Math.random() * 10); // Fix the typo here
  }
}



  


