import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  gameService = inject(GameService);
  actualScore$: Observable<number> = this.gameService.actualScore$;;
  
  ngOnInit(): void {
    let storedScore = localStorage.getItem('score');
    if (storedScore !== null) {
      this.gameService.actualScore.next(+storedScore);
    } else {
      localStorage.setItem('score', '0');
      this.gameService.actualScore.next(0);
    }
  }

}
