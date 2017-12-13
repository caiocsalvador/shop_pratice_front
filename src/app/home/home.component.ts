import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	onSignin(form: NgForm) {
		this.authService.signin(form.value.email, form.value.password)
			.subscribe(
				tokenData => {
					this.router.navigate(['/products']);
				},
				error => console.log(error),
			);
	}

}
