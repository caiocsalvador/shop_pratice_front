import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
	constructor(private http: HttpClient) {

	}

	// Looking for products
	getProducts() {
		return this.http.get('http://localhost:8000/api/products');
	}
}