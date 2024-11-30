import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-outfits',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './outfits.component.html',
  styleUrl: './outfits.component.css'
})
export class OutfitsComponent {

}
