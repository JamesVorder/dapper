import { Component, OnInit } from '@angular/core';
import { DappsService } from '../services/dapps/dapps.service';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-dapps',
	templateUrl: './dapps.component.html',
	styleUrls: ['./dapps.component.css']
})
export class DappsComponent implements OnInit {

	dapps: Array<Object> = new Array<Object>()
	start: number
	pageLength = 10
	paginator: BehaviorSubject<number> = new BehaviorSubject<number>(0)

	constructor(
		public dappsService: DappsService
	) {  
		this.dappsService.getDapps(this.start, this.pageLength)
		dappsService.dapps$.subscribe(newList => {
			this.dapps = newList
		})

		this.paginator.subscribe(newPage => {
			this.start = newPage
			//this.end = this.start + this.pageLength
			this.dappsService.getDapps(this.start, this.pageLength)
		})
	}

	public nextPage(){
		this.paginator.next(this.start + this.pageLength)
	}

	public prevPage(){
		let startIndex = this.start - this.pageLength
		if(startIndex < 0){
			this.paginator.next(0)
		}
		else{
			this.paginator.next(startIndex)
		}
	}

	/*public set pageLength(l: number){
		this.pageLength = l
		this.paginator.next(this.start)
	}*/


	ngOnInit() {

	}

}
