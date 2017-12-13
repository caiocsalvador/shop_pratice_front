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

	addToCart(item: Product) {
		this.products.push(item);
		this.total = +this.total + +item.price;
		this.cartChanged.next(this.products.slice());
	}

	getItems() {
		return this.products.slice();
	}

	removeItem(item: Product){
		const index: number = this.products.indexOf(item);
		if (index !== -1) {
			this.products.splice(index, 1);
		}
		this.total = +this.total - +item.price;
		this.cartChanged.next(this.products.slice());
	}

	buyCart(){
		const body = JSON.stringify({ products: this.products.slice(), total: this.total});		
		return this.http.post('http://localhost:8000/api/shopping?token=' + this.authService.getToken(), body,
			{ headers: new HttpHeaders().set('Content-Type', 'application/json') }
		);
	}

	emptyCart(){
		this.products = [];
		this.total = 0;
		this.cartChanged.next(this.products.slice());
	}

}