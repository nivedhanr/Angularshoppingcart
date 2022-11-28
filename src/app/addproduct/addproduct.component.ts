import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  image=""
  title=""
  description=""
  price=""
  seller=""
  quantity=""

  readValues=()=>
  {
    let data:any={"image":this.image,"title":this.title,"description":this.description,"price":this.price,"seller":this.seller,"quantity":this.quantity}
    console.log(data)
  }


}
