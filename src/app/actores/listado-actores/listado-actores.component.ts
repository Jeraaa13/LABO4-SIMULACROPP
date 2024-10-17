import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Actor {
  id?: string;
  nombre: string;
  apellido: string;
  documento: string;
  edad: number;
  pais: string;
}

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.css',
})
export class ListadoActoresComponent {
  @Input() actores: Actor[] = [];
  @Output() actorSeleccionado = new EventEmitter<Actor>();

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }
}
