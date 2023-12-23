import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";

import { Card } from "../../../models/card.interface";
import { cardFlipAnimation } from "./card-flip.animation";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [cardFlipAnimation],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  flip: string = 'inactive';

  ngOnInit(): void {
    // console.log(this.card);
  }

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
}
