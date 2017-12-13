import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuard } from './shared/auth-guard.service';
import { ProductService } from './shared/product.service';
import { AuthService } from './shared/auth.service';
import { CartSevice } from './shared/cart.service';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './cart/success/success.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		SignupComponent,
		CartComponent,
		SuccessComponent,
		ErrorComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule,
		ProductsModule
	],
	providers: [
		ProductService,
		AuthService,
		AuthGuard,
		CartSevice
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
