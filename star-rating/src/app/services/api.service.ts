import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  incrementButtonCount(buttonname: String){
    const requestUrl = "https://ryhdmsbrpf.execute-api.us-east-1.amazonaws.com/test/api?button=" + buttonname;
    return this.http.get(requestUrl);
  }



}
