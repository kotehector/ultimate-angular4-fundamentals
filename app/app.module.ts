import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
// importamos el módulo para demostrar el 2-way-databinding
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
	declarations: [
		AppComponent 
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule
	],
	bootstrap: [ AppComponent ]		// Componente raíz
})
 export class AppModule {}
