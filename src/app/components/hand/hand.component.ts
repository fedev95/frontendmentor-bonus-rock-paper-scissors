import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hand } from 'src/app/models/hand.model';

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css'],
  host: {'class': 'w-100 h-100 d-flex'}
})
export class HandComponent {

  @Input() hand!: Hand | null;

}
