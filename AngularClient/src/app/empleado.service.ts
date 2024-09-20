import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  public urlServidor: string = 'http://127.0.0.1:8000/gestion/v1';

  public listaEmpleados: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inyectar el ID de la plataforma
  ) {}

  obtenerListaEmpleados(): void {
    this.http
      .get(this.urlServidor + '/empleados')
      .subscribe((respuesta: any) => {
        console.log(respuesta);
        this.listaEmpleados = respuesta.resultado.registros;
      }, error => {
        console.error('Error al obtener la lista de empleados', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener la lista de empleados.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

  guardarEmpleado(
    nombreEmpleado: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    numeroEmpleado: number,
    fechaAlta: string,
    nss: string,
    rfc: string,
    curp: string
  ): void {
    this.http
      .post(
        this.urlServidor + '/empleados',
        {
          nombreEmpleado: nombreEmpleado,
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          numeroEmpleado: numeroEmpleado,
          fechaAlta: fechaAlta,
          nss: nss,
          rfc: rfc,
          curp: curp
        }
      )
      .subscribe((respuesta: any) => {
        console.log(respuesta.msg);
        Swal.fire({
          title: 'Empleado guardado correctamente',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/empleados']);
          }
        });
      }, error => {
        console.error('Error al guardar el empleado', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo guardar el empleado.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

  obtenerEmpleado(id: string): Observable<any> {
    return this.http.get<any>(this.urlServidor + '/empleados/' + id).pipe(
      catchError(error => {
        console.error('Error al obtener el empleado', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo obtener el empleado.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        return throwError(error);
      })
    );
  }

  editarEmpleado(
    id: string,
    nombreEmpleado: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    numeroEmpleado: number,
    fechaAlta: string,
    nss: string,
    rfc: string,
    curp: string
  ): void {
    this.http
      .put(
        this.urlServidor + '/empleados/' + id,
        {
          nombreEmpleado: nombreEmpleado,
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          numeroEmpleado: numeroEmpleado,
          fechaAlta: fechaAlta,
          nss: nss,
          rfc: rfc,
          curp: curp
        }
      )
      .subscribe((respuesta: any) => {
        console.log(respuesta.msg);
        Swal.fire({
          title: 'Empleado actualizado correctamente',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/empleados']);
          }
        });
      }, error => {
        console.error('Error al editar el empleado', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo actualizar el empleado.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete<any>(this.urlServidor + `/empleados/`+ id).pipe(
      catchError(error => {
        console.error('Error al eliminar el empleado', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo eliminar el empleado.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        return throwError(error);
      })
    );
  }
}
