import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../shared/product.service';
import { Product } from '../shared/product.interface';
import 'rxjs/Rx';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Product[];

	constructor(private productService: ProductService, private router: Router) { }

	ngOnInit() {
		// User product service to get products
		this.productService.getProducts()
			.map((data) => data['products'])
			.subscribe(
			// Successful response.
			(products: Product[]) => this.products = products,
			// Errors handler:
			error => {
				this.router.navigate(['/error'], { queryParams: { error: error.error.message } });
			}
		);
	}

}
