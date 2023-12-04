import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
];

@NgModule({
  declarations: [GameComponent, CardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameModule {}
