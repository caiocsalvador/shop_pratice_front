import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	title = 'Shopping';
	token: string;

	constructor(private authService: AuthService, private router: Router, location: Location) { }

	ngOnInit() {
		// Check if is logged if is redirect to products page
		this.token = this.authService.getToken();
		if (location.pathname === '/') {
			if (this.authService.isAuthenticated()) {
				this.router.navigate(['/products']);
			}
		}
	}
}
