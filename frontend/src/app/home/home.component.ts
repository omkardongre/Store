import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductComponent, CommonModule, PaginatorModule, EditPopupComponent]
})

export class HomeComponent {

  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }

  // to display on home page
  fetchProducts(page: number, perPage: number) {
    this.productsService.getProducts('http://localhost:3000/clothes', {
      page: page,
      perPage: perPage
    }).subscribe({
      next: (data: Products) => {
        this.products = data.items;
        this.totalRecords = data.total;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    
    });
  }

  // Paginator
  totalRecords: number = 0;
  rows: number = 5;

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  // Edit popup
  displayEditPopup: boolean = false;
  selectedProduct: Product = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    rating: 0,
  };

  C(product: Product) {
    this.selectedProduct = product;
    this.displayEditPopup = true;
  }
  onConfirmEdit(product: Product) {
    this.editProduct(this.selectedProduct, this.selectedProduct.id);
    this.displayEditPopup = false;
  }

  editProduct(product: Product, id: number) {
    this.productsService.editProduct('http://localhost:3000/clothes/' + id, product).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchProducts(0, this.rows);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }



  // Add Product
  displayAddPopup: boolean = false;

  toggleAddPopup() {
    this.displayAddPopup = true;
  }
  onConfirmAdd(product: Product) {
    this.addProduct(product);
    this.displayAddPopup = false;   
  }

  addProduct(product: Product) {
    this.productsService.addProduct('http://localhost:3000/clothes', product).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchProducts(0, this.rows);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }


  // Product Section
  products: Product[]=[];

  onProductOutput(product: Event) {
    console.log(product + "output");
  }






  deleteProduct(product: Product, id: number) {
    this.productsService.deleteProduct('http://localhost:3000/clothes/' + product.id).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchProducts(0, this.rows);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }


}
