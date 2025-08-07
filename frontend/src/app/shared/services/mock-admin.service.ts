import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AdminKPIData {
  openCases: number;
  pendingInvoiceTotal: string;
  upcomingAppointments: number;
  templatesToReview: number;
}

export interface AdminClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  clientType: 'Entreprise' | 'Individuel';
  createdAt: string;
}

export interface AdminCase {
  id: string;
  ref: string;
  title: string;
  clientName: string;
  type: string;
  status: 'Active' | 'Pending' | 'Closed';
  paid: boolean;
  lastUpdate: string;
}

export interface AdminInvoice {
  id: string;
  ref: string;
  clientName: string;
  total: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  dueDate: string;
}

export interface AdminAppointment {
  id: string;
  clientName: string;
  startDateTime: string;
  status: 'Pending' | 'Confirmed' | 'Declined';
  type: string;
}

export interface AdminTemplate {
  id: string;
  title: string;
  version: string;
  updatedAt: string;
  createdBy: string;
}

export interface AdminNotification {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MockAdminService {

  private mockKPIData: AdminKPIData = {
    openCases: 12,
    pendingInvoiceTotal: '€15,750',
    upcomingAppointments: 8,
    templatesToReview: 3
  };

  private mockClients: AdminClient[] = [
    { id: 'CLI-001', name: 'Société ACME', email: 'contact@acme.tn', phone: '+216 71 123 456', clientType: 'Entreprise', createdAt: '2024-01-15' },
    { id: 'CLI-002', name: 'Ahmed Ben Ali', email: 'ahmed.benali@email.tn', phone: '+216 98 765 432', clientType: 'Individuel', createdAt: '2024-02-20' },
    { id: 'CLI-003', name: 'Fatma Trabelsi', email: 'fatma.trabelsi@email.tn', phone: '+216 22 345 678', clientType: 'Individuel', createdAt: '2024-03-01' }
  ];

  private mockCases: AdminCase[] = [
    { id: 'CASE-001', ref: 'CASE-2024-001', title: 'Litige Commercial', clientName: 'Société ACME', type: 'Commercial', status: 'Active', paid: true, lastUpdate: '2024-03-10' },
    { id: 'CASE-002', ref: 'CASE-2024-002', title: 'Divorce Contentieux', clientName: 'Ahmed Ben Ali', type: 'Familial', status: 'Pending', paid: false, lastUpdate: '2024-03-08' },
    { id: 'CASE-003', ref: 'CASE-2024-003', title: 'Succession', clientName: 'Fatma Trabelsi', type: 'Civil', status: 'Closed', paid: true, lastUpdate: '2024-02-28' }
  ];

  private mockInvoices: AdminInvoice[] = [
    { id: 'INV-001', ref: 'INV-2024-001', clientName: 'Société ACME', total: '€2,500', status: 'Paid', dueDate: '2024-03-15' },
    { id: 'INV-002', ref: 'INV-2024-002', clientName: 'Ahmed Ben Ali', total: '€1,800', status: 'Pending', dueDate: '2024-03-25' },
    { id: 'INV-003', ref: 'INV-2024-003', clientName: 'Fatma Trabelsi', total: '€3,200', status: 'Overdue', dueDate: '2024-02-28' }
  ];

  private mockAppointments: AdminAppointment[] = [
    { id: 'APT-001', clientName: 'Société ACME', startDateTime: '2024-03-15T10:00:00', status: 'Confirmed', type: 'Consultation' },
    { id: 'APT-002', clientName: 'Ahmed Ben Ali', startDateTime: '2024-03-16T14:00:00', status: 'Pending', type: 'Suivi' },
    { id: 'APT-003', clientName: 'Fatma Trabelsi', startDateTime: '2024-03-18T09:00:00', status: 'Pending', type: 'Signature' }
  ];

  private mockTemplates: AdminTemplate[] = [
    { id: 'TPL-001', title: 'Contrat de Vente Immobilière', version: '2.1', updatedAt: '2024-03-01', createdBy: 'Me Benali' },
    { id: 'TPL-002', title: 'Procuration Générale', version: '1.5', updatedAt: '2024-02-15', createdBy: 'Me Benali' },
    { id: 'TPL-003', title: 'Statuts SARL', version: '3.0', updatedAt: '2024-03-05', createdBy: 'Me Benali' }
  ];

  private mockNotifications: AdminNotification[] = [
    { id: 'NOT-001', message: 'Nouveau client inscrit: Société ACME', createdAt: '2024-03-10T09:30:00', read: false },
    { id: 'NOT-002', message: 'Rendez-vous confirmé avec Ahmed Ben Ali', createdAt: '2024-03-09T14:15:00', read: false },
    { id: 'NOT-003', message: 'Facture INV-2024-003 en retard de paiement', createdAt: '2024-03-08T11:00:00', read: true }
  ];

  // TODO: Replace with REST API calls
  getKPIData(): Observable<AdminKPIData> {
    return of(this.mockKPIData);
  }

  // TODO: Replace with REST API calls
  getClients(): Observable<AdminClient[]> {
    return of(this.mockClients);
  }

  // TODO: Replace with REST API calls
  getCases(): Observable<AdminCase[]> {
    return of(this.mockCases);
  }

  // TODO: Replace with REST API calls
  getInvoices(): Observable<AdminInvoice[]> {
    return of(this.mockInvoices);
  }

  // TODO: Replace with REST API calls
  getAppointments(): Observable<AdminAppointment[]> {
    return of(this.mockAppointments);
  }

  // TODO: Replace with REST API calls
  getTemplates(): Observable<AdminTemplate[]> {
    return of(this.mockTemplates);
  }

  // TODO: Replace with REST API calls
  getNotifications(): Observable<AdminNotification[]> {
    return of(this.mockNotifications);
  }

  // TODO: Replace with REST API calls
  addClient(client: Partial<AdminClient>): Observable<AdminClient> {
    const newClient: AdminClient = {
      id: `CLI-${String(this.mockClients.length + 1).padStart(3, '0')}`,
      name: client.name || '',
      email: client.email || '',
      phone: client.phone || '',
      clientType: client.clientType || 'Individuel',
      createdAt: new Date().toISOString().split('T')[0]
    };
    this.mockClients.push(newClient);
    return of(newClient);
  }

  // TODO: Replace with REST API calls
  markInvoicePaid(invoiceId: string): Observable<boolean> {
    const invoice = this.mockInvoices.find(inv => inv.id === invoiceId);
    if (invoice) {
      invoice.status = 'Paid';
    }
    return of(true);
  }

  // TODO: Replace with REST API calls
  updateAppointmentStatus(appointmentId: string, status: 'Confirmed' | 'Declined'): Observable<boolean> {
    const appointment = this.mockAppointments.find(apt => apt.id === appointmentId);
    if (appointment) {
      appointment.status = status;
    }
    return of(true);
  }
}