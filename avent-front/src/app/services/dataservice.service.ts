import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Appel au back end pour récupération des liens du jour avec une requête GET.
   */ 
  public getDailyLinks(): Observable<Link[]> {
    return this.httpClient.get<Link[]>('http://localhost:8080/api/link');
  }

  /**
   * Envoi d'une requête POST au back end pour créer un nouveau lien
   * @param newLink le nouveau lien à sauvegarder
   */
  public createNewLink(newLink: Link): Observable<Link> {
    return this.httpClient.post<Link>('http://localhost:8080/api/link', newLink);
  }
}
