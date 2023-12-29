import { Component, inject, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";

import { Card } from "../models/card.interface";
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  appService = inject(AppService);
  cards$!: Observable<Card[]>;

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cards$ = this.appService.getCards().pipe(
      map((cards: Card[]) => {
        return cards
          .concat(cards)
          .sort(() => Math.random() - 0.5)
          .map((card: Card, index: number) => {
            return { ...card, id: index };
          });
      })
    );
  }

  clickCard(card: Card) {
    if (this.appService.getSelectedCard()?.id === card.id) {
      return;
    }
    console.log(card);
    card.flipped = true;
    if (this.appService.getSelectedCard()) {
      if (this.appService.compareCards(card.name)) {
        this.appService.resetSelectedCard();
        console.log('match');
      } else {
        //wait 1 second and flip back cards with flipped = true
        console.log('no match');
        this.appService.resetSelectedCard();
        setTimeout(() => {
          //run through cards and flip back cards with flipped = true
        }, 1000);
      }
    } else {
      this.appService.setSelectedCard(card);
    }
  }

  trackByIndex(index: number) {
    return index;
  }
}
