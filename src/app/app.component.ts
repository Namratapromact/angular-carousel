import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  // ngOnInit(){
  //   var obj;
  //   this.http.get('./src/imgdata/carouseldata.json').subscribe(data => {obj=data,console.log(obj)}, error => console.log(error));
  //   console.log(obj);
  // }
    prev(index: number, isVisible: boolean){
      index = index<=0 ? 5 : index--; 
      isVisible = false;
    }

    next(index: number, isVisible: boolean){
      index = index>=5 ? 0 : index++;
      isVisible = true;
    }

  constructor(){}

  data = [
    {
      "imgSrc": 'src/images/owl1.jpg',
      "index": '1',
      "isVisible": 'true'
    },
    {
      "imgSrc": 'src/images/owl2.jpg',
      "index": '2',
      "isVisible": 'false'
    },
    {
      "imgSrc": 'src/images/owl3.jpg',
      "index": '3',
      "isVisible": 'false'
    },
    {
      "imgSrc": 'src/images/owl4.jpg',
      "index": '4',
      "isVisible": 'false'
    },
    {
      "imgSrc": 'src/images/owl5.jpg',
      "index": '5',
      "isVisible": 'false'
    }
  ]

}
