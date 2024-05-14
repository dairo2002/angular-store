import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { ListComponent } from '../../pages/list/list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>',
  // styleUrls: ['./product.component.css']
})
export class ProductComponent {
  img = "https://picsum.photos/640/640?=" + Math.random() 

}
