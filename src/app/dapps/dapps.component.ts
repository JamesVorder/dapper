import { Component, OnInit, ViewChild } from '@angular/core';
import { DappsService } from '../services/dapps/dapps.service';
import { BehaviorSubject } from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface DappSummary{
	Name: string;
	Num: string;
	Description: string;
}

@Component({
	selector: 'app-dapps',
	templateUrl: './dapps.component.html',
	styleUrls: ['./dapps.component.css']
})

export class DappsComponent implements OnInit {

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	dataSource: MatTableDataSource<DappSummary> = new MatTableDataSource()
	displayedColumns: string[] = ["Name", "Num", "Description"]
	start: number = 0
	numDapps = 100 //TODO: some kind of paging of our HTTP results.
	//right now, there aren't enough dapps to make that a pressing issue.
	//paginatorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0)

	constructor(
		public dappsService: DappsService
	) { 
		this.dappsService.getDapps(this.start, this.numDapps)
		this.dappsService.dapps$.subscribe(newList => {
			this.dataSource = new MatTableDataSource(newList)
			this.dataSource.paginator = this.paginator
			this.dataSource.sort = this.sort

		})

		/*this.paginatorSubject.subscribe(newPage => {
			this.start = newPage
			//this.end = this.start + this.pageLength
			this.dappsService.getDapps(this.start, this.pageLength)
		})*/

		}

	/*public nextPage(){
		this.paginatorSubject.next(this.start + this.pageLength)
	}

	public prevPage(){
		let startIndex = this.start - this.pageLength
		if(startIndex < 0){
			this.paginatorSubject.next(0)
		}
		else{
			this.paginatorSubject.next(startIndex)
		}
	}*/

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

}


