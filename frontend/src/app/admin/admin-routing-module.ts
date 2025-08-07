import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Clients } from './clients/clients';
import { Cases } from './cases/cases';
import { Invoices } from './invoices/invoices';
import { Appointments } from './appointments/appointments';
import { Templates } from './templates/templates';
import { Notifications } from './notifications/notifications';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'clients', component: Clients },
      { path: 'cases', component: Cases },
      { path: 'invoices', component: Invoices },
      { path: 'appointments', component: Appointments },
      { path: 'templates', component: Templates },
      { path: 'notifications', component: Notifications }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
