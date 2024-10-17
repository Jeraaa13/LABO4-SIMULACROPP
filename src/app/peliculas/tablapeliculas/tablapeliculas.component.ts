import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablapeliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablapeliculas.component.html',
  styleUrl: './tablapeliculas.component.css',
})
export class TablapeliculasComponent {
  @Input() peliculas: any[] = [];
  @Output() peliculaSeleccionada = new EventEmitter<any>();

  seleccionarPelicula(pelicula: any) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
