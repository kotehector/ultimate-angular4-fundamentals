import { Component } from "@angular/core";

@Component({
	selector: 'app-root', 
	styleUrls: ['app.component.scss'], 
	template: `
		<div class="app">
			<button	(click)="handleClick(username.value);">
				Dar Valor
			</button>
			<!-- Sintax variables #ref -->
			<input type="text" #username>
			<div>{{ name }}</div>
		</div>
	`
})
export class AppComponent {
	name: string = 'Hector';
	
	handleClick(value: string) {
		console.log(value);
	}
}

/**
 * Las variables #ref del Template nos permiten crear una referencia
 * a un Nodo en particular del DOM que es accesible en cualquier 
 * parte del Template. Esto es muy práctico.
 */
