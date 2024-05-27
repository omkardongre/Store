import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from '../components/edit-popup/edit-popup.component';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ButtonModule, ProductComponent, CommonModule, PaginatorModule, EditPopupComponent]
})

export class HomeComponent {

  onCancelEdit() {
    this.displayEditPopup = false;
  }

  onCancelAdd() {
    this.displayAddPopup = false;
  }

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
  currentPage: number = 0;
  @ViewChild('paginator') paginator: Paginator | undefined

  onPageChange(event: any) {
    this.currentPage = event.page;
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

  toggleEditPopup(product: Product) {
    this.displayEditPopup = true;
    this.selectedProduct = product;
  }

  onConfirmEdit(product: Product) {
    this.editProduct(this.selectedProduct, this.selectedProduct.id);
    this.displayEditPopup = false;
  }

  editProduct(product: Product, id: number) {
    this.productsService.editProduct('http://localhost:3000/clothes/' + id, product).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchProducts(this.currentPage, this.rows);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  onProductEdit(product: Product) {
    // alert('Edit Product inside home component')
    this.toggleEditPopup (product);
  }


  // Add Product
  displayAddPopup: boolean = false;

  toggleAddPopup() {
    this.displayAddPopup = true;
  }

  onConfirmAdd(product: Product) {
    this.addProduct(product);
    this.displayAddPopup = false;
    // this.fetchProducts(this.currentPage, this.rows);
  }

  addProduct(product: Product) {
    this.productsService.addProduct('http://localhost:3000/clothes', product).subscribe({
      next: (data) => {
        console.log(data);

        // log the total records and rows and current page
        console.log(this.totalRecords + "total records");
        console.log(this.rows + "rows");
        console.log(this.currentPage + "current page");

        if(this.totalRecords % this.rows == 0) {
          this.currentPage = this.totalRecords / this.rows;
        } else {
          this.currentPage = Math.floor(this.totalRecords / this.rows);
        }
        
        this.fetchProducts(this.currentPage, this.rows);
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





  // Delete Product
  deleteProduct(id: number) {
    this.productsService.deleteProduct('http://localhost:3000/clothes/' + id).subscribe({
      next: (data) => {
        console.log(data);
        this.fetchProducts(this.currentPage, this.rows);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  onProductDelete(id: number) {
    this.deleteProduct(id);
  }

}
