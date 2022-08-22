import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-orden',
  templateUrl: './nueva-orden.page.html',
  styleUrls: ['./nueva-orden.page.scss'],
})
export class NuevaOrdenPage implements OnInit {

  tipos: any[];
  constructor() { }

  ngOnInit() {
    this.tipos = [
      {
        tipo: "Hematologico",
        lista: ["Biometría Hemática", "Hemoglobina", "Hematíes","Hemaótcrito","Leucocitos","Plaquetas","Grupo sanguíneo ABO. Rh."]
      },
      {
        tipo: "Bioquímicos",
        lista: ["Urea", "Bun", "Creatinina","Ácido úrico","Glucosa","Insulina","Albuminas","Proteínas total"]
      },
      {
        tipo: "Orina",
        lista: ["Físico - Químico - Sedimento", "Gravindex", "Calcio en orina 24h","Estudio de cálculo","Sodio en orina 24h","Urea en orina 24h","Potasio en orina 24h"]
      },
      {
        tipo: "Fertilidad",
        lista: ["Espermatorama", "Cultivo y antibiograma", "Test post-coito","Score cervical","Otros"]
      },
      {
        tipo: "Heces",
        lista: ["Parasitológico", "Clostridium difficile", "Sangre oculta","Citología de moco nasal","Adenovirus","Rotavirus","Pilory en heces"]
      },
      {
        tipo: "Moco nasal",
        lista: ["Citología de moco nasal"]
      },
    ]
  }
}
