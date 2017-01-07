export class Testplan {

  id: string;
  title: string;
  description: string;
  // attributes: Set<string>;

  constructor(title: string, description: string) {
    this.id = "TID-" + Math.random()*651651;
    this.title = title;
    this.description = description;
  }
}
