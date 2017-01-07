import {Injectable} from "@angular/core";
import {Testplan} from "./testplan";

@Injectable()
export class TestplanService {

  testplans: Array<Testplan>;

  constructor() {
    this.testplans = new Array<Testplan>();
    this.testplans.push(new Testplan("Partner", "Fast tests for Partner"));
    this.testplans.push(new Testplan("Account", "Complete testsuite around all account methods"));
    this.testplans.push(new Testplan("Session", "Capacity tests for session handling"));
  }

  byId(id: string) {
    for (let testplan of this.testplans) {
      if (testplan.id == id) {
        return testplan;
      }
    }

    return null;
  }

}
