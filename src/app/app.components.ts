import {Component} from "angular2/core";
import {HelloWorld} from "../helloworld/helloworld.components";

@Component({
  selector: `my-app`,
  template: `
    <hello-world></hello-world>
  `,
  directives: [HelloWorld]
})
export class App {
}
