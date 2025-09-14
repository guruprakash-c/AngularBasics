import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import routeConfig  from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AuthGuardService } from './Guards/auth-guard.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    AuthGuardService,
    //provideRouter(routeConfig), provideClientHydration(withIncrementalHydration()),
    provideRouter(routeConfig, withComponentInputBinding()), provideClientHydration(withEventReplay()),
    provideHttpClient()
  ]
};
