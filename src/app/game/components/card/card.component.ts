import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../../models/card.interface';
import { cardFlipAnimation } from './card-flip.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [cardFlipAnimation],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  ngOnInit(): void {
    // console.log(this.card);
  }

  flipCard(card: Card): void {
    card.flipped = !card.flipped;
    console.log(card);
  }
}
