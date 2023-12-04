import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const cardFlipAnimation = trigger('cardFlip', [
  state(
    'true',
    style({
      transform: 'rotateY(179deg)',
    })
  ),
  state(
    'false',
    style({
      transform: 'rotateY(0)',
    })
  ),
  transition('active => inactive', animate('500ms ease-out')),
  transition('inactive => active', animate('500ms ease-in')),
]);
