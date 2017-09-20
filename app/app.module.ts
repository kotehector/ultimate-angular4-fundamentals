/**
 * Esto son los 3 módulos principales que necesitamos importar para
 * una App Base en Angular
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

// importamos el Componente que va a ser el Root de este Módulo (App)
import { AppComponent } from "./app.component";

/**
 * Un Módulo es un contenedor que contiene todos los Componentes que
 * necesitemos y todas sus dependencias (servicios)
 */
@NgModule({
	// Declaración de Componentes que vamos a necesitar en la App
	declarations: [
		AppComponent 
	],
	// imports de Angular que vamos a utilizar
	imports: [
		BrowserModule,
		CommonModule
	],
	bootstrap: [ AppComponent ]		// Componente raíz
})
 export class AppModule {}
