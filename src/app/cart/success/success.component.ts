import { CartSevice } from './../../shared/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-success',
	templateUrl: './success.component.html',
	styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

	constructor(private cartService: CartSevice) { }

	ngOnInit() {
		this.cartService.emptyCart();
	}

}
