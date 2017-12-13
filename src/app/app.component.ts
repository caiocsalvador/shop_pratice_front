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
		this.token = this.authService.getToken();
		if (location.pathname === '/') {
			if (this.authService.isAuthenticated()) {
				this.router.navigate(['/products']);
			}
		}
	}
}
