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
					<span 
						class="status"
						[class.checked-in]="passenger.checkedIn"></span>
					{{ i }}: {{ passenger.fullname }}
				</li>
			</ul>

			<h3>Pasajeros</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<span 
						class="status"
						[ngClass]="{ 
							'checked-in' : passenger.checkedIn,
							'checked-out': !passenger.checkedIn }"></span>
					{{ i }}: {{ passenger.fullname }}
				</li>
			</ul>

			<h3>Pasajeros (style)</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<!-- sintax para añadir Estilos dinámicamente -->
					<span 
						class="status"
						[style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red') "></span>
					{{ i }}: {{ passenger.fullname }}
				</li>
			</ul>

			<h3>Pasajeros (ngStyle)</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index;">
					<!-- sintax para añadir Estilos dinámicamente -->
					<span 
						class="status"
						[ngStyle]="{
							backgroundColor: (passenger.checkedIn ? 'green' : 'red'),
							color: (passenger.checkedIn ? 'yellowgreen' : 'orange')
						} "></span>
					<span
						[ngStyle]="{
							backgroundColor: (passenger.checkedIn ? 'green' : 'red'),
							color: (passenger.checkedIn ? 'yellowgreen' : 'orange')
						}">	
					{{ i }}: {{ passenger.fullname }}
					</span>
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
 * [style.propiedad] = "expr" nos permite acceder a las propiedades de cada Elemento
 * igual que en JS y evaluar una Condición para modificarla
 * dinamicamente.
 * [ngStyle] = { propiedad : "expr" } nos permite acceder a las propiedades de cada Elemento
 * igual que en JS pero esta vez como un Objeto y evaluar varias 
 * Condiciones para modificarlas dinámicamente.
 */
