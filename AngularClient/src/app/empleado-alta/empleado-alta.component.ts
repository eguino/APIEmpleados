import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-alta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleado-alta.component.html',
  styleUrl: './empleado-alta.component.css'
})
export class EmpleadoAltaComponent {
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

  constructor(private service: EmpleadoService){
    
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
    
    
    this.service.guardarEmpleado(nombreEmpleado, apellidoPaterno, apellidoMaterno, numeroEmpleado, fechaAlta, rfc, nss, curp );
  }
}
