import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Actor {
  nombre: string;
  apellido: string;
  documento: string;
  edad: number;
  pais: string;
}

@Component({
  selector: 'app-tablaactores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablaactores.component.html',
  styleUrl: './tablaactores.component.css',
})
export class TablaactoresComponent implements OnInit {
  @Output() actorSeleccionado = new EventEmitter<string>();
  actores: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.getActores().subscribe((actores) => {
      this.actores = actores;
    });
  }

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor.nombre + ' ' + actor.apellido);
  }

  getActores(): Observable<Actor[]> {
    return this.firestore
      .collection<Actor>('actores')
      .valueChanges({ idField: 'id' });
  }
}
