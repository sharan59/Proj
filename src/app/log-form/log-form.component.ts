import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private _http:Http ,private router:Router) { }

  ngOnInit() {
  }
  onsubmit(a)
{
  console.log(a);
  var headers= new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  
this._http.post('/api/login',a, options)
          .subscribe(data => {
               // alert("success");
                this.router.navigate(['/courseselection'])
          }, error => {
                alert("invalid user")
             // console.log(JSON.stringify(error.json()));
          })
        }
}
