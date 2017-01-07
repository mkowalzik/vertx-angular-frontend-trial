import {Component, OnInit} from "@angular/core";
import {Testplan} from "../testplan";
import {TestplanService} from "../testplan.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = "Dashboard";
  testplans: Array<Testplan>;

  constructor(testplanService: TestplanService) {
    this.testplans = testplanService.testplans;
  }

  ngOnInit() {

  }

}
