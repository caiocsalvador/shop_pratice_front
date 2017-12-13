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

	addToCart(product: Product){
		this.cartService.addToCart(product);
		this.message = product.name + ' was added to your cart!';
		setTimeout(() => {
			this.message = '';
		}, 2000);
	}

}