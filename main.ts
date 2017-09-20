/**
 *  Necesitamos esta parte de Angular para decirle a la App que utilice
 *  este componente para compilar la App dinámicamente en el navegador.
 */
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Necesitamos importar el Módulo Raíz.
import { AppModule } from "./app/app.module";

// Lanzamos el Compilador
platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * Los pasos a seguir son:
 * 	1 - Creamos el app.component (tag, estilos, template)
 * 	2 - Creamos el app.module (delcaracion, imports y bootstrap)
 * 	3 - Hacemos el Bootstrapping desde el main.ts 
 */
