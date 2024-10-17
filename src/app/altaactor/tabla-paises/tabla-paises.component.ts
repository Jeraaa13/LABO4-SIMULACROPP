import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css',
})
export class TablaPaisesComponent implements OnInit {
  paises: any[] = [];

  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://restcountries.com/v3.1/all')
      .subscribe((data) => (this.paises = data.map((p) => p.name.common)));
  }

  seleccionarPais(pais: string) {
    this.paisSeleccionado.emit(pais);
  }
}
