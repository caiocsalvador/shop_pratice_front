import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
	imports: [
		CommonModule,
		ProductsRoutingModule
	],
	declarations: [
		ProductsComponent,
		ProductComponent,
	],
	/*exports: [
		ProductComponent,
	]*/
})
export class ProductsModule { }
