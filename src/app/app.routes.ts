import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular'
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {FailedComponent} from './failed/failed.component';
import {EventsPage} from './pages/events-page/events-page';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'events',
    component: EventsPage,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login-failed',
    component: FailedComponent,
  },
];
