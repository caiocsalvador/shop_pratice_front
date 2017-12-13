import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
	error = 'Something went wrong';

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {

		this.route.queryParams.subscribe(params => {
			this.error = params['error'];
		});

	}

}
