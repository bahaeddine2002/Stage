import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Services } from '../services/services';
import { Portfolio } from '../portfolio/portfolio';
import { Contact } from '../contact/contact';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, About, Services, Portfolio, Contact, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
