// Necesitamos 'import' la declaración de 'Component' del Core de Angular
import { Component } from "@angular/core";

/**
 * Necesitamos exportar nuestro nuevo 'Component' con una 'class'
 * Componente Root.
 * @export
 * @class AppComponent
 */
@Component({
	selector: 'app-root', // <app-root></app-root>
	styleUrls: ['app.component.scss'], // referencia al sass
	template: `
		<div class="app">
			{{ title }}
		</div>
	`
})
export class AppComponent {
	/**
	 * Declaramos las varibles y le decimos el tipo de dato.
	 * @type {string}
	 * @memberof AppComponent
	 */
	title: string;
	/**
	 * Crea una instanctia de AppComponent.
	 * @memberof AppComponent
	 */
	constructor() {
		this.title = 'Ultimate Angular Fundamentals'; 
	}
}
