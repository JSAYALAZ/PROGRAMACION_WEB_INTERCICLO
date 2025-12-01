import { ApplicationConfig, EnvironmentProviders, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { ToastModule } from 'primeng/toast';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),

    importProvidersFrom(ToastModule),
    MessageService,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'proyecto-interciclo-3c1b8',
        appId: '1:909089700030:web:1a4ec8bfd79975e0d686ef',
        storageBucket: 'proyecto-interciclo-3c1b8.firebasestorage.app',
        apiKey: 'AIzaSyDJydRbeT-_8kjCLp5B7Yjc6YV8MZvQ8sg',
        authDomain: 'proyecto-interciclo-3c1b8.firebaseapp.com',
        messagingSenderId: '909089700030',
        measurementId: 'G-PZL23LQS71',
        // projectNumber: '909089700030',
        // version: '2',
      })
    ),
    provideAuth(() => getAuth()),
    provideHttpClient(),
  ],
};


