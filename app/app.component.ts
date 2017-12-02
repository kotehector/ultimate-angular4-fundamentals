import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
		<div class="app">
			
			<input 
				type="text" 
				[value]="name"
				(input)="handleChange($event.target.value)">
			
			<!-- comportamiento del '*' internamente de Angular -->
			<template [ngIf]="name.length > 2">
				<div>
					Buscando ... {{ name }}
				</div>
			</template>

			<!-- usamos el '*' para simplificar (sugar sintax) -->
			<div *ngIf="name.length > 2">
				Buscando ... {{ name }}
			</div>
			
		</div>
	`
})
export class AppComponent {
  name: string = "";

  handleChange(value: string) {
    this.name = value;
  }
}

/**
 * *ngIf es una DIRECTIVA que nos permite de una manera muy fácil
 * mostrar/ocultar contenido dependiendo de una condición	.
 *  
 */
