import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from './../shared/product.interface';
import { CartSevice } from './../shared/cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	products: Product[];
	subscription: Subscription;

	constructor(private cartService: CartSevice) { }

	ngOnInit() {
		this.products = this.cartService.getItems();
		this.subscription = this.cartService.cartChanged.subscribe(
			(products: Product[]) => {
				this.products = products;
			}
		);
	}

}
