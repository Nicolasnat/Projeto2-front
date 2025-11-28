import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AUTH_INTERCEPTOR_PROVIDER } from './interceptors/auth.interceptor';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    BsModalService,
    { provide: API_BASE_URL, useValue: 'http://localhost:8080/auth' },
    AUTH_INTERCEPTOR_PROVIDER
  ]
};
