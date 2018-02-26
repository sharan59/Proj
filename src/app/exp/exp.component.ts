import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
  providers:[DataService]
})
export class ExpComponent implements OnInit {

  num : number;
  data:any[];
  constructor(private test:DataService) { }
  
  ngOnInit()
  {
    this.test.getData().subscribe((testData) => this.data=testData) 
   
  }
  delete()
  {
    this.data.splice(this.num,1);
  }

}


  

