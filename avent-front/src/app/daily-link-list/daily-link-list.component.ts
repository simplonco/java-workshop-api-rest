import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-daily-link-list',
  templateUrl: './daily-link-list.component.html',
  styleUrls: ['./daily-link-list.component.css']
})
export class DailyLinkListComponent implements OnInit {

  dailyLinks: Link[];
  
  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.dataService.getDailyLinks().subscribe( links => this.dailyLinks = links );
    // this.dataService.getDailyLinks().subscribe(function onSuccess(links) {
    //   this.dailyLinks = links;
    // });
  }

}
