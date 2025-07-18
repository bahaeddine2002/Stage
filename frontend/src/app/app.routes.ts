import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
];
