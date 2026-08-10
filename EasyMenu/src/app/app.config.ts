import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyARPO8JKcDNrmLZQAVAQoOV371GJmHMGUY",
  authDomain: "easymenu-20181.firebaseapp.com",
  projectId: "easymenu-20181",
  storageBucket: "easymenu-20181.firebasestorage.app",
  messagingSenderId: "62137100829",
  appId: "1:62137100829:web:6f809bdfd694e89f18f4f4"
};

const firebaseApp = initializeApp(firebaseConfig);

export const FIRESTORE = new InjectionToken<Firestore>('firestore');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: FIRESTORE, useFactory: () => getFirestore(firebaseApp) }
  ]
};
