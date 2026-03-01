import { Routes } from '@angular/router';
import { Dashboard, SignalForm, TemplateForm, ReactiveForm } from './features';
import { NotFound } from './shared/components';
import { Ngrx } from './features/ngrx/ngrx';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Dashboard,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'template-form',
        component: TemplateForm,
      },
      {
        path: 'reactive-form',
        component: ReactiveForm,
      },
      {
        path: 'signal-form',
        component: SignalForm,
      },
      {
        path: 'ngrx',
        component: Ngrx,
      },
    ],
  },

  {
    path: '**',
    component: NotFound,
  },
];
