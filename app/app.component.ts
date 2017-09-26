import { Component } from "@angular/core";

@Component({
	selector: 'app-root', 
	styleUrls: ['app.component.scss'], 
	template: `
		<div class="app">
			<button
				(click)="handleClick();">
				Cambiar Nombre!	
			</button>
			<!-- one-way databinding -->
			<input 
				type="text" 
				[ngModel]="name"
				(ngModelChange)="handleChange($event);">
			
			<!-- two-way databinding sintax -->
			<input 
			type="text" 
			[(ngModel)]="name">

			<div>{{ name }}</div>
		</div>
	`
})
export class AppComponent {
	name: string = 'Hector';
	
	handleClick() {
		this.name = 'HMH';
	}
	handleChange(value: string) {
		this.name = value;
	}
}

/**
 * 2-way-databinding lo utilizamos cuando algo cambia y emitimos un evento
 * para tratar el dato.
 * 1-way-databinding lo utilizamos para hacer cambios en componentes locales.
 */
