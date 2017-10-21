import { Component } from "@angular/core";

interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean,
	checkInDate: number
	// El operador ? hace que el Dato sea opcional. 
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
		<div class="app">

			<h3>Pasajeros (sugar syntax)</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span 
						class="status"
						[class.checked-in]="passenger.checkedIn"></span>
					{{ i }}: {{ passenger.fullname }}
					<p>{{ passenger | json }}</p>
					<div class="date">
						Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'y MMM' | uppercase) : 'Not checked in...' }}
					</div>
				</li>
			</ul>
			
		</div>
	`
})
export class AppComponent {
  passengers: Passenger[] = [{
		id: 1,
		fullname: 'Hector',
		checkedIn: true,
		checkInDate: 1490742000000
	},{
		id: 2,
		fullname: 'Raquel',
		checkedIn: true,
		checkInDate: 1890742000000
	},{
		id: 3,
		fullname: 'Maria',
		checkedIn: false,
		checkInDate: null
	},{
		id: 4,
		fullname: 'Juan',
		checkedIn: false,
		checkInDate: null
	},{
		id: 5,
		fullname: 'Peper',
		checkedIn: true,
		checkInDate: 1290742000000
	}];
}

/**
 * Funciones que devuelven algo nuevo.
 * 
 * function upercase(string) {
 *	return string.toUpperCase();
 * }
 *
 * var name = upercase('hector');
 * console.log(name); // HECTOR
 */


