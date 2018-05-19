import {inject} from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";

@inject(EntityManager)
export class Demo {
  constructor(entityManager) {
    this.todoRepository = entityManager.getRepository('todo');
    this.listRepository = entityManager.getRepository('list');
  }
}
