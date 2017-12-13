import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../shared/auth.service';
import { CartSevice } from '../shared/cart.service';
import { Product } from '../shared/product.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	subscription: Subscription;
	amount = 0;

	constructor(private authService: AuthService, private cartService: CartSevice) { }

	ngOnInit() {
		// Checks if the array with products in cart has changed
		this.subscription = this.cartService.cartChanged.subscribe(
			(products: Product[]) => {
				this.amount = products.length;
			}
		);
	}

	// Event handler for logout button
	onLogout() {
		this.authService.logout();
	}

}
