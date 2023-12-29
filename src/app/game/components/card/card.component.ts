import { Component, inject, Input } from "@angular/core";

import { Card } from "../../../models/card.interface";
import { AppService } from "../../../services/app.service";
import { cardFlipAnimation } from "./card-flip.animation";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [cardFlipAnimation],
})
export class CardComponent {
  @Input() card!: Card;
  flip: string = 'inactive';

  gameService = inject(AppService);

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
}
