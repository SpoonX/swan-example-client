import {inject} from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";

@inject(EntityManager)
export class Demo {

  constructor(entityManager) {
    this.todoRepository = entityManager.getRepository('todo');
  }

  myEventCallback(event) {
    console.log('Event "%s" was triggerd', event);
  }

  myFunctionCallback(event) {
    console.log('Edit was triggerd with data:', event);
  }
}
