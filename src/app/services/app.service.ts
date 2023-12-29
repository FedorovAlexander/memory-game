import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Card } from "../models/card.interface";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private selectedCard: Card | undefined;

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('../../assets/data.json');
  }

  setSelectedCard(card: Card) {
    this.selectedCard = card;
  }

  getSelectedCard() {
    return this.selectedCard;
  }

  resetSelectedCard() {
    this.selectedCard = undefined;
  }

  compareCards(card: Card) {
    return this.selectedCard?.id === card.id;
  }
}
