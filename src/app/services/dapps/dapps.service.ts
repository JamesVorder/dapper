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

	public getDapps(start: number, count: number){
		let url = 'https://194.1.237.94/GetDappList'
		let queryString = `StartNum=${start}&CountNum=${count}`
		console.log("Getting " + url + "?" + queryString)
		this.http.get(`${url}?${queryString}`, {responseType: 'json'}).toPromise().then(
			(res) => {
				console.log(JSON.stringify(res))
				this.dapps.next(res['arr'])
			}
		).catch((err) => {
			console.log(err)
		})
	}

	public get dapps$(): Observable<any[]> {
		return this.dapps.asObservable()
	}
}
