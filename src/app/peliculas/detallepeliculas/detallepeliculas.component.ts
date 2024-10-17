import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detallepeliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detallepeliculas.component.html',
  styleUrl: './detallepeliculas.component.css',
})
export class DetallepeliculasComponent {
  @Input() pelicula: any | null = null;
}
