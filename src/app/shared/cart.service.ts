import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Product } from './product.interface';

@Injectable()
export class CartSevice {
	private products: Product[] = [];
	cartChanged = new Subject<Product[]>();

	addToCart(item: Product) {
		this.products.push(item);
		this.cartChanged.next(this.products.slice());
	}

	getItems() {
		return this.products.slice();
	}

}