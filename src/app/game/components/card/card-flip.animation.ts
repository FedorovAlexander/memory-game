import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const cardFlipAnimation = trigger('cardFlip', [
  state('true', style({ transform: 'rotateY(180deg)' })),
  state('false', style({ transform: 'rotateY(0deg)' })),
  transition('false => true', animate('500ms ease-in')),
  transition('true => false', animate('500ms ease-out')),
]);
