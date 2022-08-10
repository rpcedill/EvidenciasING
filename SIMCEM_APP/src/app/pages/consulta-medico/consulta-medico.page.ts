import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-medico',
  templateUrl: './consulta-medico.page.html',
  styleUrls: ['./consulta-medico.page.scss'],
})
export class ConsultaMedicoPage implements OnInit {
  datos: any[];
  constructor() { }

  ngOnInit() {
    this.datos =[
        {
        id: 1,
        nombre: 'Juan Dominguez',
        fecha: '01/01/2022',
        hora: '19:00',
        estado: 'Por atender'
        },
        {
          id: 2,
          nombre: 'Maria Ramos',
          fecha: '01/01/2022',
          hora: '19:00',
          estado: 'Por atender'
          },


    ];
  }

}
