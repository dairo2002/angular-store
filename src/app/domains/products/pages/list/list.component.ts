import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  fromChild(event: string){
    console.log("Estamos en el padre")
    console.log(event);
    
  }

}
