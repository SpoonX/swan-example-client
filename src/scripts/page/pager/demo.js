import {inject} from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";

@inject(EntityManager)
export class Demo {
  constructor(entityManager) {
    this.todoRepository = entityManager.getRepository('todo');

    let data = [];

    for (let i = 0; i < 500; i++) {
      data.push({
        id: i
      });
    }

    this.pagerData = data;
  }
}
