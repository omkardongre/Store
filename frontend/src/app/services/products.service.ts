import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Options, PaginationParams, Products } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(
    private apiService: ApiService 
  ) { }

  getProducts(url: string, params: PaginationParams) : Observable<Products> {
    return this.apiService.get<Products>(url, {
      params,
      responseType: 'json',
    });
  }

  addProduct(url: string, body: any) : Observable<any> {
    return this.apiService.post<any>(url, body, {
      responseType: 'json',
    });
  }

  editProduct(url: string, body: any) : Observable<any> {
    return this.apiService.put<any>(url, body, {
      responseType: 'json',
    });
  }

  deleteProduct(url: string) : Observable<any> {
    return this.apiService.delete<any>(url, {
      responseType: 'json',
    });
  }
  

}
