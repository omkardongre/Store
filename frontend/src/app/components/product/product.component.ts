import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../types';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [JsonPipe, FormsModule, RatingModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  deleteProduct() {
    this.delete.emit(this.product);
  }
  editProduct() {
    this.edit.emit(this.product);
  }
  @Input() product!: Product;
  @Output() edit : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete : EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
  }

  
}

