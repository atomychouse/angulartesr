import { Component, OnInit } from '@angular/core';
import {Home} from  '../home';
import {DISHES} from '../mock-dishes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	home = DISHES;
  selectedHome:Home;

  constructor() { }

  ngOnInit() {
  

  }



  onSelect(home:Home):void{
  	this.selectedHome=home;
  	console.log(this.selectedHome);
  }



}
