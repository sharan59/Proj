import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-insertcourse',
  templateUrl: './insertcourse.component.html',
  styleUrls: ['./insertcourse.component.css'],
  providers: [DataService]
})
export class InsertcourseComponent implements OnInit {

  coursename:string;
  faculty:string;
  coursedisc:string;
  coursefee:string;
  adata :any[];
  constructor(private _http:Http, private test:DataService) {
    this.test.getallData().subscribe((testData) => this.adata=testData);
   }

  ngOnInit() {
  }

  transfer(a)
  {
    this.coursename=a.coursename;
  this.faculty=a.faculty;
  this.coursedisc=a.coursedisc;
  this.coursefee = a.coursefee;
  console.log(this.coursename+this.faculty+this.coursedisc+this.coursefee);
  console.log(a);
  var headers= new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  
  this._http.post('/api/insertcourse',a, options)
          .subscribe(data => {
                alert('Registered Successfully');
          }, error => {
              console.log(JSON.stringify(error.json()));
          })
  
  }

  deleteData(name:any,x:any)
  {
    console.log(name);
    this.test.deleteData(name).subscribe((testData)=>this.adata=testData)
  }
}
