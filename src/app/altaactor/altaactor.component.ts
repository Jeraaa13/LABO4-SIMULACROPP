import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablapeliculasComponent } from '../peliculas/tablapeliculas/tablapeliculas.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Actor {
  nombre: string;
  apellido: string;
  documento: string;
  edad: number;
  pais: string;
}

@Component({
  selector: 'app-altaactor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TablapeliculasComponent,
    TablaPaisesComponent,
  ],
  templateUrl: './altaactor.component.html',
  styleUrl: './altaactor.component.css',
})
export class altaactorComponent {
  actor: Actor = {
    nombre: '',
    apellido: '',
    documento: '',
    edad: 0,
    pais: '',
  };

  constructor(private firestore: AngularFirestore) {}

  agregarActor() {
    this.agregarActorFirestore(this.actor)
      .then(() => {
        console.log('Actor agregado exitosamente');
        this.actor = {
          nombre: '',
          apellido: '',
          documento: '',
          edad: 0,
          pais: '',
        };
      })
      .catch((error) => {
        console.error('Error al agregar actor:', error);
      });
  }

  actualizarPais(pais: string) {
    this.actor.pais = pais;
  }

  agregarActorFirestore(actor: any) {
    return this.firestore.collection('actores').add(actor);
  }
}
