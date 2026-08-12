import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';

registerLocaleData(en);

const firebaseConfig = {
  apiKey: "AIzaSyAD5HracTz1oG907U6RT0b-LJOWLRVTtLc",
  authDomain: "citypass-71f40.firebaseapp.com",
  projectId: "citypass-71f40",
  storageBucket: "citypass-71f40.firebasestorage.app",
  messagingSenderId: "606893141937",
  appId: "1:606893141937:web:6d0ad11dc865d797299790"
};

const firebaseApp = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNzI18n(en_US),
    provideNzDateFnsAdapter(),
    { provide: 'FIREBASE_APP', useValue: firebaseApp}
  ],
};
