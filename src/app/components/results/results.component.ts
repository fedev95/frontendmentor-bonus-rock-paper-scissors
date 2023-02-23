import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandComponent } from "../hand/hand.component";
import { GameService } from 'src/app/services/game.service';
import { Hand } from 'src/app/models/hand.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-results',
    standalone: true,
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css'],
    host: { 'class': 'd-flex flex-grow-1 bg-dnger' },
    imports: [CommonModule, HandComponent]
})
export class ResultsComponent implements OnInit {
  
  gameService: GameService = inject(GameService);
  playerHand: Observable<Hand> = this.gameService.playerHand$;
  houseHand!: Observable<Hand>;
  result$!: Observable<string>;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.gameService.setHouseHand();
      this.houseHand = this.gameService.houseHand$;
      this.gameService.compare();
      setTimeout(() => {
        this.result$ = this.gameService.result$;
        this.gameService.setScore();
      }, 500);
    }, 500);
  }
  
  playAgain() {
    this.gameService.comparisonScreen.next(false);
  }

}
