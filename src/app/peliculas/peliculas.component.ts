import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablapeliculasComponent } from './tablapeliculas/tablapeliculas.component';
import { DetallepeliculasComponent } from './detallepeliculas/detallepeliculas.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, TablapeliculasComponent, DetallepeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  peliculaSeleccionada: any | null = null;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  onPeliculaSeleccionada(pelicula: any) {
    this.peliculaSeleccionada = pelicula;
  }

  agregarPelicula(pelicula: any) {
    return this.firestore.collection('peliculas').add(pelicula);
  }

  getPeliculas(): Observable<any[]> {
    return this.firestore
      .collection<any>('peliculas')
      .valueChanges({ idField: 'id' });
  }
}
