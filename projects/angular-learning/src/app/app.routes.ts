import { Routes } from '@angular/router';
import { Dashboard } from '../components/dashboard/dashboard';
import { NotFound } from '../components/not-found/not-found';
import { SignalForm } from '../components/signal-form/signal-form';
import { TemplateForm } from '../components/template-form/template-form';
import { ReactiveForm } from '../components/reactive-form/reactive-form';

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
    ],
  },

  {
    path: '**',
    component: NotFound,
  },
];
