import { Component } from "@angular/core";

@Component({
	selector: 'app-root', 
	styleUrls: ['app.component.scss'], 
	template: `
		<div class="app">
			<h1 [innerHtml]="title"></h1>
			<!-- element.innerHtml = 'Hector' --> 
			<img [src]="logo"> 
			<!-- element.src = 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyleft.svg' -->
			
			<input type="text" [value]="name">
			<div>{{ name }}</div>
			<!-- one-data-flow. Los cambios en el input NO se reflejan en el DIV -->
		</div>
	`
})
export class AppComponent {
	title: string;
	name: string = 'Hector';
	logo: string = 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/copyleft.svg';
	
	constructor() {
		this.title = 'Ultimate Angular Fundamentals'; 
	}
}

/**
 * El binding de propiedades es la unión de propiedades de la Clase con
 * el template.
 * Para entender lo que hacen los {{ }} vamos a utilizar 'sugar sintax'
 * que es la manera de hacer algo que funcione bien y se vea limpio, sencillo.
 * Utilizamos [propiedad] para hacer el binding de las propiedades en lugar de
 * {{ }}, hacemos esto para usar one-way databinding
 */
