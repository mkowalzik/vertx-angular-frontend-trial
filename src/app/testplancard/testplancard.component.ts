import {Component, OnInit, Input} from "@angular/core";
import {Testplan} from "../testplan";

@Component({
  selector: '[app-testplancard]',
  templateUrl: './testplancard.component.html',
  styleUrls: ['./testplancard.component.css']
})
export class TestplanCardComponent implements OnInit {

  @Input() testplan: Testplan;

  ngOnInit(): void {
  }
}
