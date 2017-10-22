/* Necesitamos importar el 'Input' que nos permite Unir propiedades
 * al Template diciendole que es un dato de entrada */
import { Component, Input } from "@angular/core";

// Importamos la 'interface' que necesitamos para los datos del Componente
import { Passenger } from "../../containers/models/passenger.interface";

@Component({
	selector: 'passenger-count',
	template:`
		<div>
			<h3>Airline Passengers</h3>
			<div>
				<p>Total passengers: {{ items.length }}</p>
				<p>Total check in: {{ checkedInCount() }}</p>
			</div>
		</div>
	`
})
export class PassengerCountComponent {
	// Creamos la Variable que le pasamos con el Binding
	@Input()
	items: Passenger[]; 
	checkedInCount(): number {
		if (!this.items) return;
		return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
	}
}
