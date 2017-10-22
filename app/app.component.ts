import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
		<div class="app">
			<passenger-dashboard></passenger-dashboard>
		</div>
	`
})
export class AppComponent {}

/**
 * El operador ? nos permite chequear una variable y devuelve
 * null si no existe.
 */


