import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.interface';
import 'rxjs/RX';

@Injectable()
export class AuthService {
	token: string;
	user: User;

	constructor(private http: HttpClient, private router: Router) {

	}

	// Signup method, sends a request for create user to the server
	signup(username: string, email: string, password: string){
		return this.http.post('http://localhost:8000/api/user',
			{ name: username, email: email, password: password },
			{ headers: new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest')}
		);
	}

	// Signin, checks with the server the user and create a token
	signin(email: string, password: string) {
		return this.http.post('http://localhost:8000/api/user/signin',
			{ email: email, password: password },
			{ headers: new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest') }
		)
		.map(
			(data) => {
				const token = data['token'];
				// Stores the user in localStorage
				this.user = data['user'];
				localStorage.setItem('user', JSON.stringify(this.user));
				// Get information through the token
				const base64Url = token.split('.')[1];
				const base64 = base64Url.replace('-', '+').replace('_', '/');
				return {token: token, decoded: JSON.parse(window.atob(base64)) };
			}
		)
		.do(
			tokenData => {
				// Stores the token in localStorage
				localStorage.setItem('token', tokenData.token);
				this.token = localStorage.getItem('token');
			}
		);
	}

	// Gets the token and user from localStorage
	getToken() {
		this.token = localStorage.getItem('token');
		this.user = JSON.parse(localStorage.getItem('user'));
		return this.token;
	}

	// Check if the user is authenticated
	isAuthenticated(){
		return this.token != null;
	}

	// Remove the token and user from localStorage
	logout(){
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		this.token = null;
		this.router.navigate(['/']);
	}

}