import {Routes} from '@angular/router';

export const routes: Routes = [{
  path: '',
  redirectTo: 'slim',
  pathMatch: 'full'
}, {
  path: 'slim',
  loadComponent: () => import('./slim/slim.component')
}];
