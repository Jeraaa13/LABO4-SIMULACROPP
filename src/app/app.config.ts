import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: FIREBASE_OPTIONS,
      useValue: {
        projectId: 'simulacro-labo',
        appId: '1:692844689261:web:1bf9eba58c249157478c64',
        storageBucket: 'simulacro-labo.appspot.com',
        apiKey: 'AIzaSyDJH7nvSu0_-IbN1-00zSX2oHI8tIWikq8',
        authDomain: 'simulacro-labo.firebaseapp.com',
        messagingSenderId: '692844689261',
      },
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simulacro-labo',
        appId: '1:692844689261:web:1bf9eba58c249157478c64',
        storageBucket: 'simulacro-labo.appspot.com',
        apiKey: 'AIzaSyDJH7nvSu0_-IbN1-00zSX2oHI8tIWikq8',
        authDomain: 'simulacro-labo.firebaseapp.com',
        messagingSenderId: '692844689261',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
