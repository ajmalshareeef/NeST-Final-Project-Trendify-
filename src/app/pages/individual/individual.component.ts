import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.css'
})
export class IndividualComponent {
  constructor(public api:ApiService,private route: ActivatedRoute){}
  item:any;
  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    this.api.getDataById(id).subscribe((data)=>{
      this.item = data;
      console.log(this.item);
    })
  }

}
