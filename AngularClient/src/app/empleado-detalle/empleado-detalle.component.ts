import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalle',
  standalone: true,
  imports: [],
  templateUrl: './empleado-detalle.component.html',
  styleUrl: './empleado-detalle.component.css'
})
export class EmpleadoDetalleComponent {
  idEmpleado!: string;
  c : any;

  constructor(private route: ActivatedRoute, private service: EmpleadoService) { 
    
  }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.paramMap.get('id')!;
    this.service.obtenerEmpleado(this.idEmpleado).subscribe(empleado => {
      this.c = empleado.resultado;
    }, error => {
      console.error('Error al obtener el empleado', error);
    });
  }
}
