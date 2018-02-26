import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-javcon',
  templateUrl: './javcon.component.html',
  styleUrls: ['./javcon.component.css'],
  providers: [DataService]
})
export class JavconComponent implements OnInit {


  data:any[];
  showColor : boolean = false;
  constructor(private test:DataService) { 
    
    this.test.getData().subscribe((testData) => this.data=testData);
  }

  ngOnInit() {
  }

}
