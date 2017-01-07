import {Component, OnInit} from "@angular/core";
import {TestplanService} from "../testplan.service";
import {Testplan} from "../testplan";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-testplan',
  templateUrl: './testplan.component.html',
  styleUrls: ['./testplan.component.css']
})
export class TestplanComponent implements OnInit {

  testplanId: string;
  testplan: Testplan;

  constructor(private route: ActivatedRoute, testplanService: TestplanService) {
    this.route.params.subscribe(
      params => {
        this.testplanId = params['id'];
        this.testplan = testplanService.byId(this.testplanId);
      })
  }

  ngOnInit() {
  }

}
