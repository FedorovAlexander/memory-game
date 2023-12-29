import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Card } from "../../../models/card.interface";
import { cardFlipAnimation } from "./card-flip.animation";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [cardFlipAnimation],
})
export class CardComponent {
  @Input() card!: Card;
  @Output() clickCard = new EventEmitter();

  flip: string = 'inactive';

  toggleFlip(card: Card) {
    this.flip === 'inactive' ? 'active' : 'inactive';
    card.flipped = !card.flipped;
    this.clickCard.emit(card);
  }
}
