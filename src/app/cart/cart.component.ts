import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

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
	total: number;

	constructor(private cartService: CartSevice, private router: Router) { }

	ngOnInit() {
		// Check the values and subscribe for changes
		this.products = this.cartService.getItems();
		this.total = this.cartService.total;
		this.subscription = this.cartService.cartChanged.subscribe(
			(products: Product[]) => {
				this.products = products;
				this.total = this.cartService.total;
			}
		);
	}

	// remove a item from cart service array
	removeItem(product: Product){
		this.cartService.removeItem(product);
	}

	// Fires the event to buy the cart
	buyCart(){
		this.cartService.buyCart().subscribe(
			response => {
				this.router.navigate(['success']);
			},
			// Error handler;
			error => {
				this.router.navigate(['/error'], { queryParams: { error: error.error.message } });
			}
		);
	}

}
