import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../../models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  ngOnInit(): void {
    console.log(this.card);
  }
}
