import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, Routes, withHashLocation} from '@angular/router';
import {Main} from './components/main';

const appRoutes: Routes = [
  { path: '', component: Main },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withHashLocation())
  ]
};
