import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() item = 0; // Move the Input decorator here

  constructor() {
    // Constructor code here (if needed)
  }

  ngOnInit(): void {
    // ngOnInit code here (if needed)
  }
}



