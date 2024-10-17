import { Component, Input } from '@angular/core';
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
  selector: 'app-detalle-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css'],
})
export class DetalleActorComponent {
  @Input() actor: Actor | null = null;
}
