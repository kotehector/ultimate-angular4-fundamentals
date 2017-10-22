import { Component } from "@angular/core";

interface child {
	name: string,
	age: number
}
interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean,
	// Con | null podemos hacerlo Opcional también.
	checkInDate: number | null,
	// El operador ? hace que el Dato sea opcional. 
	children: child[] | null
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
					<div class="children">
						<!-- El operador ? hace que el Dato sea opcional. -->
						Children: {{ passenger.children?.length || 0 }}
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
		checkInDate: 1490742000000,
		children: [{ name: 'Ted', age: 12},{ name: 'Chloe', age: 7}]
	},{
		id: 2,
		fullname: 'Raquel',
		checkedIn: true,
		checkInDate: 1890742000000,
		children: null
	},{
		id: 3,
		fullname: 'Maria',
		checkedIn: false,
		checkInDate: null,
		children: [{ name: 'Ted', age: 12},{ name: 'Chloe', age: 7}]
	},{
		id: 4,
		fullname: 'Juan',
		checkedIn: false,
		checkInDate: null,
		children: [{ name: 'Ted', age: 12},{ name: 'Chloe', age: 7}]
	},{
		id: 5,
		fullname: 'Peper',
		checkedIn: true,
		checkInDate: 1290742000000,
		children: null
	}];
}

/**
 * El operador ? nos permite chequear una variable y devuelve
 * null si no existe.
 */


