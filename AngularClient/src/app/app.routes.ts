import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { NgModule } from '@angular/core';
import { EmpleadoAltaComponent } from './empleado-alta/empleado-alta.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';

export const routes: Routes = [
    { path: "empleados", component: EmpleadoListComponent},
    { path: "empleados/alta", component: EmpleadoAltaComponent},
    { path: '', redirectTo: "/empleados", pathMatch: "full" },
    { path: "empleados/detalle/:id", component: EmpleadoDetalleComponent},
    { path: "empleados/editar/:id", component: EmpleadoEditarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
