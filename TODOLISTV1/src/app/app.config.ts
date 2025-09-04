import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, NgxsModule } from '@ngxs/store';
import { TodoState } from './store/todo.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideStore(
      [],
    ),
    importProvidersFrom(
      NgxsModule.forRoot([TodoState])
    )
  ]
};
