import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {
  temoignages = [
    {
      nom: 'Jean Dupont',
      texte: 'Maître Benali m’a accompagné avec professionnalisme et humanité. Grâce à ses conseils avisés, j’ai pu résoudre mon litige rapidement.',
      photo: 'assets/img/portfolio/thumbnails/1.jpg',
      ville: 'Paris'
    },
    {
      nom: 'Sophie Martin',
      texte: 'Un service irréprochable et une écoute attentive. Je recommande vivement ce cabinet pour toute question juridique.',
      photo: 'assets/img/portfolio/thumbnails/2.jpg',
      ville: 'Lyon'
    },
    {
      nom: 'Karim El Amrani',
      texte: 'Merci pour votre efficacité et votre disponibilité. J’ai été rassuré et bien défendu tout au long de la procédure.',
      photo: 'assets/img/portfolio/thumbnails/3.jpg',
      ville: 'Marseille'
    },
    {
      nom: 'Claire Dubois',
      texte: 'Des conseils clairs et précis, une grande réactivité. Je referai appel à Maître Benali sans hésiter.',
      photo: 'assets/img/portfolio/thumbnails/4.jpg',
      ville: 'Toulouse'
    },
    {
      nom: 'Mohamed Bensalem',
      texte: 'Très satisfait de l’accompagnement et du suivi de mon dossier. Un grand merci !',
      photo: 'assets/img/portfolio/thumbnails/5.jpg',
      ville: 'Nice'
    },
    {
      nom: 'Fatima Zahra',
      texte: 'Une avocate compétente et à l’écoute. Je recommande sans réserve.',
      photo: 'assets/img/portfolio/thumbnails/6.jpg',
      ville: 'Montpellier'
    }
  ];
}
