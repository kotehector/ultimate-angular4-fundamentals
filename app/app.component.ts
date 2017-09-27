import { Component } from "@angular/core";

/**
 * Interface para definir el tipo de Dato Personalizado
 * con las restricciones de Datos para TS
 * 
 * @interface Passenger
 */
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
			
		<h3>Pasajeros (explicación)</h3>
		<ul>
			<!-- Explicación del ngFor -->
			<template ngFor let-passenger let-i="index" [ngForOf]="passengers">
				<li>
					{{ i }}: {{ passenger.fullname }}
				</li>
			</template>
		</ul>

			<h3>Pasajeros (sugar syntax)</h3>
			<ul>
				<!-- sintax para recorrer un Array -->
				<!-- Angular no da un variable que se llama 'index' -->
				<li *ngFor="let passenger of passengers; let i = index;">
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
 * *ngFor es una DIRECTIVA que nos permite de una manera muy fácil
 * recorrer un array.
 * Vamos a usar una Interface para crear el tipo de Dato personalizado
 * en TS con diferentes restricciones.
 * 
 *  
 */
