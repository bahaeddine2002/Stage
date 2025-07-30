import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Cases } from './cases/cases';
import { Documents } from './documents/documents';
import { Invoices } from './invoices/invoices';
import { Appointments } from './appointments/appointments';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'cases', component: Cases },
      { path: 'documents', component: Documents },
      { path: 'invoices', component: Invoices },
      { path: 'appointments', component: Appointments }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
