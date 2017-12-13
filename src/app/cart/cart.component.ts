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
		this.products = this.cartService.getItems();
		this.total = this.cartService.total;
		this.subscription = this.cartService.cartChanged.subscribe(
			(products: Product[]) => {
				this.products = products;
				this.total = this.cartService.total;
			}
		);
	}

	removeItem(product: Product){
		this.cartService.removeItem(product);
	}

	buyCart(){
		this.cartService.buyCart().subscribe(
			response => {
				this.router.navigate(['success']);
			},
			error => console.log(error),
		);
	}

}
