import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../shared/auth-guard.service';
import { ProductsComponent } from './products.component';

const productsRoutes: Routes = [
	{ path: '', component: ProductsComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forChild(productsRoutes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }
