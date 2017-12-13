import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router){

	}

	// Check if the user is logged, if is not redirect to login page
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.authService.isAuthenticated()) {
			return true;
		}
		else {
			this.router.navigate(['/']);
		}
		return false;
	}
}