import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";

@NgModule({
	declarations: [
		AppComponent 
	],
	imports: [
		BrowserModule,
		CommonModule
	],
	bootstrap: [ AppComponent ]		// Componente raíz
})
 export class AppModule {}
