import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link';
import { User } from '../model/user';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.css']
})
export class NewLinkComponent implements OnInit {

  // Déclaration des attributs
  // Les topics pour la liste déroulante
  topics: string[];
  // Le nouveau lien à créer
  link = new Link();

  constructor(private dataService: DataserviceService) { }

  /**
   * Une fois le composant prêt ==>
   *  - création d'un nouveau user associé au lien
   *  - remplissage de la liste de topics
   */
  ngOnInit() {
    this.link.user = new User();
    this.topics = [];
    this.topics.push('WEB', 'DATA', 'IA');
  }

  /**
   * Gestion de l'évènement d'envoi du formulaire
   */
  newLink() {
    this.dataService.createNewLink(this.link).subscribe(newLink => {
      console.log(newLink);
    })
  }

}
