import { Component, OnInit } from '@angular/core';

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

	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.productService.getProducts()
			.map((data) => data.products)
			.subscribe(
			// Successful responses call the first callback.
			(products: Product[]) => this.products = products,
			// Errors will call this callback instead:
			err => {
				console.log('Something went wrong!');
			}
		);
	}

}
