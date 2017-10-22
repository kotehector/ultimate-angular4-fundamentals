/** Importamos el OnInit */
import { Component, OnInit } from "@angular/core";

import { Passenger } from "../models/passenger.interface";

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count></passenger-count>
			<passenger-detail></passenger-detail>
			<h3>Passenger Dashboard</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span 
						class="status"
						[class.checked-in]="passenger.checkedIn"></span>
					{{ i }}: {{ passenger.fullname }}
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
// Lo implementamos en el Componente
export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];
	constructor(){}
	
	/**
	 * Creamos el método ngOnInit que será el que inicialice las
	 * variables del Componente
	 * 
	 * @memberof PassengerDashboardComponent
	 */
	ngOnInit(){
		console.log('ngOnInit');
		this.passengers = [{
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
}
