import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emnpleado-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {
  constructor(private service: EmpleadoService) {
    this.service.obtenerListaEmpleados();
  }

  get listado(){
    return this.service.listaEmpleados;
  }

  eliminar(id: string): void {
    this.service.eliminarEmpleado(id).subscribe(() => {
      Swal.fire({
        title: 'empleado eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        this.service.obtenerListaEmpleados();
      });
    }, error => {
      console.error('Error al eliminar el empleado', error);
      Swal.fire({
        title: 'Error al eliminar el empleado',
        text: 'No se pudo eliminar el empleado.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });
  }
}
