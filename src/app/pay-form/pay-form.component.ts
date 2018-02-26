import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit {

  data:any[];
  constructor(private test:DataService) { }
  
  ngOnInit()
  {
    this.test.getData().subscribe((testData) => this.data=testData) 
   
  }
}
