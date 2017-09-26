import { Component } from "@angular/core";

@Component({
	selector: 'app-root', 
	styleUrls: ['app.component.scss'], 
	template: `
		<div class="app">
		<!-- (evento)="function($event);" -->
		<button
			(click)="handleClick();">
			Cambiar Nombre!	
		</button>
			<input 
				type="text" 
				[value]="name"
				(input)="handleInput($event);"
				(blur)="handleBlur($event);">
			<div>{{ name }}</div>
		</div>
	`
})
export class AppComponent {
	name: string = 'Hector';
	
	handleClick() {
		this.name = 'HMH';
	}
	handleInput(event: any) {
		this.name = event.target.value;
	}
	handleBlur(event: any) {
		this.name = event.target.value;
		console.log(event);		
	}
}

/**
 * El binding de eventos es la unión de funciones de la Clase con
 * el template.
 * Utiliza una sintaxis diferente.
 * Utilizamos (evento) para hacer el binding de los funciones para manejar
 * el evento que necesitamos.
 * La función SIEMPRE puede recibir el $event como parámetro para trabajar
 * con el y acceder a todas las propiedades del elemento.
 * Los eventos son el ejemplo claro de 2-data-binding
 */
