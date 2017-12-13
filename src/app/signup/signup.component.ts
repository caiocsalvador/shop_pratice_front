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

	onSignup(form: NgForm) {
		this.authService.signup(form.value.username, form.value.email, form.value.password)
			.subscribe(
				response => {
					alert('User registered!');
					setTimeout(() => {
						this.router.navigate(['']);
					}, 2000);
				},
				error => console.log(error),
			);
	}

}
