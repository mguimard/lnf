import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  Service,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from './app.routes';

@Service()
export class AuthService {
  token = 'blablabla';
}

export function loggingInterceptor1(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  console.log('I1', req.url);
  return next(req);
}

export function loggingInterceptor2(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  console.log('I2', req.url);
  return next(req);
}

export function addHeader(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  let service = inject(AuthService);
  console.log('I3', req.url);

  let clone = req.clone({
    headers: req.headers.set('X-my-header', service.token),
  });

  if (Math.random() > 0.5) throw new Error('Boom');

  return next(clone);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor2, loggingInterceptor1, addHeader])),
  ],
};
