import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-meanc',
  templateUrl: './meanc.component.html',
  styleUrls: ['./meanc.component.css'],
  providers: [DataService]
})
export class MeancComponent implements OnInit {

 
  data:any[];
  showColor : boolean = false;
  constructor(private test:DataService) { 
    
    this.test.getmData().subscribe((testData) => this.data=testData);
  }

  ngOnInit() {
  }

}
