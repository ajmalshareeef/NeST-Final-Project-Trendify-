import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private api:ApiService){}
  outfits:any=[]
  ngOnInit(){
    this.api.getData().subscribe((data:any)=>{this.outfits=data})
  }

}
