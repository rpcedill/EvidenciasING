import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen-medico',
  templateUrl: './examen-medico.page.html',
  styleUrls: ['./examen-medico.page.scss'],
})
export class ExamenMedicoPage implements OnInit {
  datos: any[];
  constructor() { }

  ngOnInit() {
    this.datos =[
      {
      id: 1,
      nombre: 'Juan Dominguez',
      fecha: '01/01/2022',
      orden: '165165ACASC',
      estado: 'imagen2'
      },
      {
        id: 2,
        nombre: 'Maria Ramos',
        fecha: '01/01/2022',
        orden: 'ASC5468412',
        estado: 'imagen1'
        },


  ];
  }

}
