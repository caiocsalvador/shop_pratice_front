import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Product } from './product.interface';

@Injectable()
export class CartSevice {
	private products: Product[] = [];
	cartChanged = new Subject<Product[]>();
	total: number = 0.00;

	constructor(private http: HttpClient, private authService: AuthService){
	}


	// Adds a item to the cart
	addToCart(item: Product) {
		this.products.push(item);
		// Add the sum
		this.total = +this.total + +item.price;
		this.cartChanged.next(this.products.slice());
	}

	// Gets a copy of the service products array
	getItems() {
		return this.products.slice();
	}

	// Remove a item from the shopping cart
	removeItem(item: Product){
		const index: number = this.products.indexOf(item);
		if (index !== -1) {
			this.products.splice(index, 1);
		}
		// Remove from the sum
		this.total = +this.total - +item.price;
		this.cartChanged.next(this.products.slice());
	}

	// Go to the api and create a record
	buyCart(){
		const body = JSON.stringify({ products: this.products.slice(), total: this.total});		
		return this.http.post('http://localhost:8000/api/shopping?token=' + this.authService.getToken(), body,
			{ headers: new HttpHeaders().set('Content-Type', 'application/json') }
		);
	}

	// Clear the cart
	emptyCart(){
		this.products = [];
		this.total = 0;
		this.cartChanged.next(this.products.slice());
	}

}