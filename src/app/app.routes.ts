import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Peliculas',
    loadComponent: () =>
      import('./peliculas/peliculas.component').then(
        (c) => c.PeliculasComponent
      ),
  },
  {
    path: 'AltaPelicula',
    loadComponent: () =>
      import('./altapeliculas/altapeliculas.component').then(
        (c) => c.AltapeliculasComponent
      ),
  },
  {
    path: 'Actores',
    loadComponent: () =>
      import('./actores/actores.component').then((c) => c.ActoresComponent),
  },
  {
    path: 'AltaActor',
    loadComponent: () =>
      import('./altaactor/altaactor.component').then(
        (c) => c.altaactorComponent
      ),
  },
  { path: '**', redirectTo: 'Peliculas' },
];
