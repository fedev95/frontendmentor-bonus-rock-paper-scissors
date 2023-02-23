import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { RulesModalComponent } from "./components/rules-modal/rules-modal.component";
import { BoardComponent } from "./components/board/board.component";
import { ResultsComponent } from "./components/results/results.component";
import { GameService } from './services/game.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        RulesModalComponent,
        BoardComponent,
        ResultsComponent
    ]
})
export class AppComponent {

  gameService = inject(GameService);
  comparisonScreen = this.gameService.comparisonScreen$;
  
}
