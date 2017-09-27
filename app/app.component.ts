import { Component } from "@angular/core";

interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
		<div class="app">

			<h3>Pasajeros (sugar syntax)</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<!-- sintax para añadir una Clase -->
					<span 
						class="status"
						[class.checked-in]="passenger.checkedIn"></span>
					{{ i }}: {{ passenger.fullname }}
				</li>
			</ul>

			<ul>
			<li *ngFor="let passenger of passengers; let i = index;">
				<!-- sintax para añadir varias Clases a través de un Obj -->
				<span 
					class="status"
					[ngClass]="{ 
						'checked-in' : passenger.checkedIn,
						'checked-out': !passenger.checkedIn }"></span>
				{{ i }}: {{ passenger.fullname }}
			</li>
		</ul>
			
		</div>
	`
})
export class AppComponent {
  passengers: Passenger[] = [{
		id: 1,
		fullname: 'Hector',
		checkedIn: true
	},{
		id: 2,
		fullname: 'Raquel',
		checkedIn: true
	},{
		id: 3,
		fullname: 'Maria',
		checkedIn: false
	},{
		id: 4,
		fullname: 'Juan',
		checkedIn: false
	},{
		id: 5,
		fullname: 'Peper',
		checkedIn: true
	}];
}

/**
 * ngClass nos permite añadir clases evaluando una expresión
 * 
 * 
 *  
 */
