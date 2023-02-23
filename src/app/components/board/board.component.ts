import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandComponent } from "../hand/hand.component";
import { GameService } from 'src/app/services/game.service';
import { Hand } from 'src/app/models/hand.model';

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    host: { 'class': 'd-flex flex-grow-1' },
    imports: [CommonModule, HandComponent]
})
export class BoardComponent {
  
  gameService = inject(GameService);
  hands: Hand[] = this.gameService.getHands();

  setPlayerHand(hand: Hand) {
    this.gameService.setPlayerHand(hand);
  }

}
