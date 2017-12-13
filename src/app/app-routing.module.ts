import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './cart/success/success.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './shared/auth-guard.service';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'products', loadChildren: './products/products.module#ProductsModule' },
	{ path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
	{ path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
	{ path: 'error', component: ErrorComponent},
	/*{ path: 'products', component: ProductsComponent },*/
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {

}