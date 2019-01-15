import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DappsService {

  dapps: BehaviorSubject<Array<Object>> = new BehaviorSubject<Array<Object>>([])

  constructor(
    public http: HttpClient
  ) { }

  public getDapps(){
    var url = 'https://194.1.237.94/GetDappList'
    var queryString = 'StartNum=8&CountNum=10'
    console.log("Getting " + url + "?" + queryString)
    this.http.get(`${url}?${queryString}`, {responseType: 'json'}).toPromise().then(
      (res) => {
        console.log(res)
        this.dapps.next(res['arr'])
      }
    )
  }

  public get dapps$(): Observable<any[]> {
    return this.dapps.asObservable()
  }
}
