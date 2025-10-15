import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EventsPage} from './pages/events-page/events-page';
import {DynaFormPage} from './pages/dyna-form-page/dyna-form-page';

export const routes: Routes = [
  {
    path: 'events',
    component: EventsPage,
  },
  {
    path: 'dyna',
    component: DynaFormPage,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
