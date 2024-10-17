import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { PeliculasActorComponent } from './peliculas-actor/peliculas-actor.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Actor {
  id?: string;
  nombre: string;
  apellido: string;
  documento: string;
  edad: number;
  pais: string;
}

@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [
    CommonModule,
    ListadoActoresComponent,
    DetalleActorComponent,
    DetallePaisComponent,
    PeliculasActorComponent,
  ],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.css',
})
export class ActoresComponent implements OnInit {
  actores: Actor[] = [];
  actorSeleccionado: Actor | null = null;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.getActores();
  }

  getActores() {
    this.firestore
      .collection<Actor>('actores')
      .valueChanges({ idField: 'id' })
      .subscribe((actores) => {
        this.actores = actores;
      });
  }

  onActorSeleccionado(actor: Actor) {
    this.actorSeleccionado = actor;
  }
}
