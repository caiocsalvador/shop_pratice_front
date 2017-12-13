import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'products', loadChildren: './products/products.module#ProductsModule' },
	/*{ path: 'products', component: ProductsComponent },*/
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {

}