import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	// Form submit
	onSignup(form: NgForm) {
		// Use the authService to singup a new user
		this.authService.signup(form.value.username, form.value.email, form.value.password)
			.subscribe(
				response => {
					// Alert successful registration
					alert('User registered!');
					setTimeout(() => {
						// Redirect to login page
						this.router.navigate(['']);
					}, 2000);
				},
			// Error handler;
			error => {
				this.router.navigate(['/error'], { queryParams: { error: error.error.message }});
			}
		);
	}

}
