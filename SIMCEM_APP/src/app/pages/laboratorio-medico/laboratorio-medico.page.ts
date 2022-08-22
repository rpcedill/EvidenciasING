import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratorio-medico',
  templateUrl: './laboratorio-medico.page.html',
  styleUrls: ['./laboratorio-medico.page.scss'],
})
export class LaboratorioMedicoPage implements OnInit {

  datos: any[];
  constructor() { }

  ngOnInit() {
    this.datos = [
      {
        id: 1,
        nombre: 'Gabriela Lascano C.',
        fecha: '01/12/2021',
        orden: 'GL493012',
        estado: 'realizado'
      },
      {
        id: 2,
        nombre: 'Tais Morales P.',
        fecha: '30/12/2021',
        orden: 'TM241116',
        estado: 'sin_entregar'
      },
      {
        id: 3,
        nombre: 'Peter Rosales O.',
        fecha: '03/01/2022',
        orden: 'PR347392',
        estado: 'sin_realizar'
      },
    ]
  }
}
