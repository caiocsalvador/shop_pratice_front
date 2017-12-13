import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/RX';

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {

	}

	signup(username: string, email: string, password: string){
		return this.http.post('http://localhost:8000/api/user',
			{ name: username, email: email, password: password },
			{ headers: new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest')}
	);
	}

	signin(email: string, password: string) {
		return this.http.post('http://localhost:8000/api/user/signin',
			{ email: email, password: password },
			{ headers: new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest') }
		)
		.map(
			(data) => {
				const token = data.token;
				const base64Url = token.split('.')[1];
				const base64 = base64Url.replace('-', '+').replace('_', '/');
				return {token: token, decoded: JSON.parse(window.atob(base64)) };
			}
		)
		.do(
			tokenData => {
				localStorage.setItem('token', tokenData.token);
			}
		);
	}
}