import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../types';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [ButtonModule, DialogModule, CommonModule, FormsModule, RatingModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {

  constructor(private formBuilder: FormBuilder) { 
  }
  @Input() display: boolean = false;
  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();
  @Input() header!: string ;


  @Input() product: Product = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    rating: 0,
  };


  // set product(value: Product) {
  //   this._product = value;
  //   this.display = true;
  // }

visible: any;

  onConfirm() {
    this.confirm.emit(this.product);
  }

  onCancel() {
    this.cancel.emit();
    this.display = false;
  }

}
