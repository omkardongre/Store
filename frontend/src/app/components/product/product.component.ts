import { Component, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';
import { Product } from '../../types';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TruncateNamePipe } from "../../pipes/truncate-name.pipe";
import { PricePipe } from "../../pipes/price.pipe";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    providers: [ConfirmationService],
    imports: [JsonPipe, FormsModule, RatingModule, ButtonModule, ConfirmPopupModule, TruncateNamePipe, PricePipe]
})
export class ProductComponent {

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }
 
  @ViewChild('deleteButton') deleteButton: any;

  @Input() product!: Product;
  @Output() edit : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete : EventEmitter<number> = new EventEmitter<number>();

  deleteProduct() {
    this.delete.emit(this.product.id);
  }
  editProduct() {
    // alert('Edit Product inside ProductComponent') 
    this.edit.emit(this.product);
  }

  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
        message: 'Are you sure that you want to delete this product?',
        accept: () => {
            this.deleteProduct();
        }
    });
  }



}

