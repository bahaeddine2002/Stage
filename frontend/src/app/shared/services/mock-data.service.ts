import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Case {
  id: string;
  title: string;
  status: 'Active' | 'Pending' | 'Closed';
  attorney: string;
  lastUpdate: string;
  description?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  case: string;
  uploaded: string;
  url?: string;
}

export interface Invoice {
  id: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  dueDate: string;
  case: string;
  description?: string;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  attorney: string;
  type: 'Consultation' | 'Meeting' | 'Court' | 'Deposition';
  status: 'Scheduled' | 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface KPIData {
  openCases: number;
  unpaidInvoices: number;
  nextAppointment: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private mockCases: Case[] = [
    { id: 'CASE-2024-001', title: 'Personal Injury Claim', status: 'Active', attorney: 'Sarah Johnson', lastUpdate: '2024-03-10' },
    { id: 'CASE-2024-002', title: 'Contract Dispute', status: 'Pending', attorney: 'Michael Brown', lastUpdate: '2024-03-08' },
    { id: 'CASE-2023-015', title: 'Employment Issue', status: 'Closed', attorney: 'Sarah Johnson', lastUpdate: '2024-02-28' }
  ];

  private mockDocuments: Document[] = [
    { id: 'DOC-001', name: 'Medical Records.pdf', type: 'Medical', size: '2.4 MB', case: 'CASE-2024-001', uploaded: '2024-03-05' },
    { id: 'DOC-002', name: 'Contract Agreement.pdf', type: 'Legal', size: '1.8 MB', case: 'CASE-2024-002', uploaded: '2024-03-03' },
    { id: 'DOC-003', name: 'Employment Letter.pdf', type: 'Employment', size: '0.9 MB', case: 'CASE-2023-015', uploaded: '2024-02-20' }
  ];

  private mockInvoices: Invoice[] = [
    { id: 'INV-2024-001', amount: '$2,500.00', status: 'Pending', dueDate: '2024-03-25', case: 'CASE-2024-001' },
    { id: 'INV-2024-002', amount: '$1,800.00', status: 'Paid', dueDate: '2024-02-15', case: 'CASE-2024-002' },
    { id: 'INV-2024-003', amount: '$3,200.00', status: 'Overdue', dueDate: '2024-02-28', case: 'CASE-2023-015' }
  ];

  private mockAppointments: Appointment[] = [
    { id: 'APT-001', title: 'Case Review Meeting', date: '2024-03-15', time: '10:00 AM', attorney: 'Sarah Johnson', type: 'Meeting', status: 'Confirmed' },
    { id: 'APT-002', title: 'Initial Consultation', date: '2024-03-18', time: '2:00 PM', attorney: 'Michael Brown', type: 'Consultation', status: 'Scheduled' },
    { id: 'APT-003', title: 'Court Hearing', date: '2024-03-22', time: '9:00 AM', attorney: 'Sarah Johnson', type: 'Court', status: 'Scheduled' }
  ];

  // TODO: Replace with actual API calls
  getCases(): Observable<Case[]> {
    return of(this.mockCases);
  }

  // TODO: Replace with actual API calls
  getDocuments(): Observable<Document[]> {
    return of(this.mockDocuments);
  }

  // TODO: Replace with actual API calls
  getInvoices(): Observable<Invoice[]> {
    return of(this.mockInvoices);
  }

  // TODO: Replace with actual API calls
  getAppointments(): Observable<Appointment[]> {
    return of(this.mockAppointments);
  }

  // TODO: Replace with actual API calls
  getKPIData(): Observable<KPIData> {
    const openCases = this.mockCases.filter(c => c.status === 'Active').length;
    const unpaidInvoices = this.mockInvoices.filter(i => i.status !== 'Paid').length;
    const nextAppointment = 'Mar 15';
    
    return of({ openCases, unpaidInvoices, nextAppointment });
  }
}