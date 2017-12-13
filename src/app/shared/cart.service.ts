import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Product } from './product.interface';

@Injectable()
export class CartSevice {
	private products: Product[] = [];
	cartChanged = new Subject<Product[]>();
	total: number = 0.00;

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

}