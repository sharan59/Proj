import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class DataService {

  dig :any[];
  private url="http://localhost:5000/api/java";
  private url2="http://localhost:5000/api/mean";
  private url3="http://localhost:5000/api/all";
  constructor(private _http:Http) { }

  getAll() : any {

 return [{firstName : 'kenam', lastName : 'sharan',  fatherName : 'rajeshwar rao', Address : 'nacharam',
  PhoneNumber : 9063375156, Email : 'sonu@gmail.com' , Password : 'sonumama' , ConfirmPassword : 'sonumama' ,AadharNumber : 123456789123}]
 }
 
 
 getData():Observable<any[]>
 {
   return this._http.get(this.url).map((res:Response)=> <any[]>res.json())
}

   getmData():Observable<any[]>
   {
     return this._http.get(this.url2).map((res:Response)=> <any[]>res.json())
   }
  
     getallData():Observable<any[]>
   {
     return this._http.get(this.url3).map((res:Response)=> <any[]>res.json())
     }
     deleteData(name):Observable<any[]>
     {
       return this._http.delete(this.url3+"/"+name)
       .map(function(response:Response){{return <any>response.json()}})
     }
   
}
