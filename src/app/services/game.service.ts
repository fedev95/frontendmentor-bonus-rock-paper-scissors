import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hand } from '../models/hand.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  hands: Hand[] = [
    {
      id: 'scissors',
      border: 'scissors-border',
      gradient: 'scissors-gradient',
      img: '../../../assets/images/icon-scissors.svg'
    },
    {
      id: 'spock',
      border: 'spock-border',
      gradient: 'spock-gradient',
      img: '../../../assets/images/icon-spock.svg'
    },
    {
      id: 'paper',
      border: 'paper-border',
      gradient: 'paper-gradient',
      img: '../../../assets/images/icon-paper.svg'
    },
    {
      id: 'lizard',
      border: 'lizard-border',
      gradient: 'lizard-gradient',
      img: '../../../assets/images/icon-lizard.svg'
    },
    {
      id: 'rock',
      border: 'rock-border',
      gradient: 'rock-gradient',
      img: '../../../assets/images/icon-rock.svg'
    },
  ];

  playerHand!: Hand;
  playerHand$!: Observable<Hand>;

  houseHand!: Hand;
  houseHand$!: Observable<Hand>;

  comparisonScreen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  comparisonScreen$: Observable<boolean> = this.comparisonScreen.asObservable();

  actualScore: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  actualScore$: Observable<number> = this.actualScore.asObservable();


  result!: string;
  result$!: Observable<string>;

  getHands(): Hand[] {
    return this.hands;
  }
  
  setPlayerHand(hand: Hand): void {
    this.playerHand = hand;
    this.playerHand$ = of(this.playerHand);
    this.comparisonScreen.next(true);
  }

  setHouseHand(): void {
    this.houseHand = this.hands[Math.floor(Math.random() * 5)];
    this.houseHand$ = of(this.houseHand);
  }

  setScore(): void {
    
    if (this.result === 'you win') {
      let newScore = +localStorage.getItem('score')! + 1;
      localStorage.setItem('score', newScore.toString());
      this.actualScore.next(newScore);
    }

    if (this.result === 'you lose') {
      let prevScore: number = +localStorage.getItem('score')!;
      if (prevScore > 0) {
        let newScore = +localStorage.getItem('score')! - 1;
        localStorage.setItem('score', newScore.toString());
        this.actualScore.next(newScore);
      }
    }

  }

  compare(): void {

    if (this.playerHand === this.houseHand) {
      this.result = 'tie';
    } else {
      if (this.playerHand.id === 'rock') {
        if (this.houseHand.id === 'lizard' || this.houseHand.id === 'scissors') {
          this.result = 'you win';
        } else {
          this.result = 'you lose';
        }
      }

      if (this.playerHand.id === 'lizard') {
        if (this.houseHand.id === 'spock' || this.houseHand.id === 'paper') {
          this.result = 'you win';
        } else {
          this.result = 'you lose';
        }
      }

      if (this.playerHand.id === 'spock') {
        if (this.houseHand.id === 'scissors' || this.houseHand.id === 'rock') {
          this.result = 'you win';
        } else {
          this.result = 'you lose';
        }
      }

      if (this.playerHand.id === 'scissors') {
        if (this.houseHand.id === 'paper' || this.houseHand.id === 'lizard') {
          this.result = 'you win';
        } else {
          this.result = 'you lose';
        }
      }

      if (this.playerHand.id === 'paper') {
        if (this.houseHand.id === 'rock' || this.houseHand.id === 'spock') {
          this.result = 'you win';
        } else {
          this.result = 'you lose';
        }
      }
    }

    this.result$ = of(this.result);

  }
  
}
