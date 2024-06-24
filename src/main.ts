import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi())
  ],
})
  .catch(err => console.log(err));
