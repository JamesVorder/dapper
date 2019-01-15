import { Component, OnInit } from '@angular/core';
import { DappsService } from '../services/dapps/dapps.service';

@Component({
  selector: 'app-dapps',
  templateUrl: './dapps.component.html',
  styleUrls: ['./dapps.component.css']
})
export class DappsComponent implements OnInit {

  dapps: Array<Object>

  constructor(
    public dappsService: DappsService
  ) { 
    this.dappsService.getDapps()
    dappsService.dapps$.subscribe(newList => {
      this.dapps = newList
    })
  }

  ngOnInit() {
    
  }

}
