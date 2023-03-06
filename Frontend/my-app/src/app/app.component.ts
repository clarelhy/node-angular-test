import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	data: any = []; // store your data
	url = window.location.origin.replace('4200', '3000'); // this gives you angular url, but replace port with 3000

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		console.log('Application init', this.url);
	}

	sampleGETRequest(): void {
		this.http.get(`${this.url}/<endpoint>`).subscribe({
			next: (data: any) => {
				console.log(data);
			},
		});
	}
}
