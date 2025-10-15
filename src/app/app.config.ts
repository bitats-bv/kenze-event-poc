import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), //, withInterceptorsFromDi()),
    {provide: MAT_DATE_LOCALE, useValue: 'nl-BE'},
    provideNativeDateAdapter()
  ]
};
