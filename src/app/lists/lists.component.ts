import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  newValue;
names:string[] =[];

addName(){

  this.names.push(this.newValue);
  this.newValue="";
}

Remove(data){
let index =this.names.indexOf(data);
this.names.splice(index,1);
}
  constructor() { }

  ngOnInit(): void {
  }

}
