import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, RatingModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})

export class EditPopupComponent {
  @Input() display: boolean = false;
  @Output() confirm = new EventEmitter<Product>();
  @Input() header!: string ;
  @Input() product: Product = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    rating: 0,
  };

  visible: any;

  onConfirm() {
    this.confirm.emit(this.product);
  }

  onCancel() {
    this.display = false;
  }

}
