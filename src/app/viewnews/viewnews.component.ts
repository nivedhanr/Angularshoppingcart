import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewnews',
  templateUrl: './viewnews.component.html',
  styleUrls: ['./viewnews.component.css']
})
export class ViewnewsComponent {
  constructor(private api:ApiService){
    api.fetchproduct().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]
    

}
