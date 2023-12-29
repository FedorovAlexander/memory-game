import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
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
  changeDetectorRef = inject(ChangeDetectorRef);
  cards$!: Observable<Card[]>;

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cards$ = this.appService.getCards().pipe(
      map((cards: Card[]) => {
        return cards.concat(cards);
      })
    );
  }

  clickCard(card: Card) {
    card.flipped = true;
    //if it's the same card, do nothing
    if (this.appService.getSelectedCard()?.id === card.id) {
      return;
    }
  }
}
