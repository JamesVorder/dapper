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
	asArray: DappSummary[] = []
	displayedColumns: string[] = ["Name", "Num", "Description"]
	start: number = 0
	numDapps = 100 
	//TODO: some kind of paging of our HTTP results.

	constructor(
		public dappsService: DappsService
	) { 
		this.refreshDApps()
		this.dappsService.dapps$.subscribe(newList => {
			this.dataSource = new MatTableDataSource(newList)
			this.dataSource.paginator = this.paginator
			this.dataSource.sort = this.sort
			this.asArray = newList

		})
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	public applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	refreshDApps() {
		this.dappsService.getDapps(this.start, this.numDapps)
	}

}

