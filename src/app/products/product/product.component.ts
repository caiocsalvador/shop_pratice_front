import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../shared/product.interface';
import { CartSevice } from './../../shared/cart.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
	message = '';

	constructor(private cartService: CartSevice) { }

	ngOnInit() {
	}

	// Adds products to the Cart Service.
	addToCart(product: Product){
		this.cartService.addToCart(product);
		// Display a flash message
		this.message = product.name + ' was added to your cart!';
		setTimeout(() => {
			// Remove the flash message after 2 sec
			this.message = '';
		}, 2000);
	}

}