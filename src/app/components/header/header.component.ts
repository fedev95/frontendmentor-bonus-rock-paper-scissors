import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  gameService = inject(GameService);
  actualScore$ = this.gameService.actualScore$;
  
  ngOnInit(): void {
    if (!localStorage.getItem('score')) {
      localStorage.setItem('score', '0');
    }
  }

}
