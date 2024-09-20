import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado-editar',
  standalone: true,
  imports: [],
  templateUrl: './empleado-editar.component.html',
  styleUrl: './empleado-editar.component.css'
})
export class EmpleadoEditarComponent {
  idEmpleado!: string;
  c: any;

  @ViewChild('nombreEmpleado')
  refnombreEmpleado!: ElementRef;

  @ViewChild('apellidoPaterno')
  refapellidoPaterno!: ElementRef;

  @ViewChild('apellidoMaterno')
  refapellidoMaterno!: ElementRef;

  @ViewChild('numeroEmpleado')
  refnumeroEmpleado!: ElementRef;

  @ViewChild('fechaAlta')
  reffechaAlta!: ElementRef;

  @ViewChild('rfc')
  refrfc!: ElementRef;

  @ViewChild('nss')
  refnss!: ElementRef;

  @ViewChild('curp')
  refcurp!: ElementRef;

  constructor(
    private service: EmpleadoService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.paramMap.get('id')!;
    this.cargarEmpleado();
  }

  cargarEmpleado(): void {
    this.service.obtenerEmpleado(this.idEmpleado).subscribe(
      data => {
        this.c = data.resultado;
        console.log(this.c);
        this.refnombreEmpleado.nativeElement.value = this.c.nombreEmpleado;
        this.refapellidoPaterno.nativeElement.value = this.c.apellidoPaterno;
        this.refapellidoMaterno.nativeElement.value = this.c.apellidoMaterno;
        this.refnumeroEmpleado.nativeElement.value = this.c.numeroEmpleado;
        this.reffechaAlta.nativeElement.value = this.c.fechaAlta;
        this.refrfc.nativeElement.value = this.c.rfc;
        this.refnss.nativeElement.value = this.c.nss;
        this.refcurp.nativeElement.value = this.c.curp;
      },
      error => {
        console.error("Error al cargar el empleado: ", error);
      }
    );
  }

  guardarEmpleado(){
    const nombreEmpleado = this.refnombreEmpleado.nativeElement.value;
    const apellidoPaterno = this.refapellidoPaterno.nativeElement.value;
    const apellidoMaterno = this.refapellidoMaterno.nativeElement.value;
    const numeroEmpleado = this.refnumeroEmpleado.nativeElement.value;
    const fechaAlta = this.reffechaAlta.nativeElement.value;
    const rfc = this.refrfc.nativeElement.value;
    const nss = this.refnss.nativeElement.value;
    const curp = this.refcurp.nativeElement.value;
    
    this.service.editarEmpleado(this.idEmpleado,nombreEmpleado, apellidoPaterno, apellidoMaterno, numeroEmpleado, fechaAlta, rfc, nss, curp );
  }
}
