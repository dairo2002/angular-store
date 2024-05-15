import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // img = "https://picsum.photos/640/640?=" + Math.random() 
  @Input({ required: true }) img: string = ""; 
  @Input({ required: true }) price: number = 0; 
  @Input({ required: true }) title: string = "";
  
  @Output() addToCart = new EventEmitter;

  addToCartHander(){
    console.log("click")
    this.addToCart.emit("Mensaje desde el hijo" + this.title )
  }

}
