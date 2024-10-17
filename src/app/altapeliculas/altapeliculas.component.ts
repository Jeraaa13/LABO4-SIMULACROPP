import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablaactoresComponent } from './tablaactores/tablaactores.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-altapeliculas',
  standalone: true,
  imports: [FormsModule, TablaactoresComponent],
  templateUrl: './altapeliculas.component.html',
  styleUrl: './altapeliculas.component.css',
})
export class AltapeliculasComponent {
  pelicula: any = {
    nombre: '',
    tipo: '',
    fecha: '',
    cantidadPublico: 0,
    foto: '',
    protagonista: '',
  };

  constructor(private firestore: AngularFirestore) {}

  agregarPelicula() {
    this.agregarPeliculaFirestore(this.pelicula)
      .then(() => {
        console.log('Película agregada exitosamente');
        this.pelicula = {
          nombre: '',
          tipo: '',
          fecha: '',
          cantidadPublico: 0,
          foto: '',
          protagonista: '',
        };
      })
      .catch((error) => {
        console.error('Error al agregar película:', error);
      });
  }

  actualizarProtagonista(protagonista: string) {
    this.pelicula.protagonista = protagonista;
  }

  agregarPeliculaFirestore(pelicula: any) {
    return this.firestore.collection('peliculas').add(pelicula);
  }
}
