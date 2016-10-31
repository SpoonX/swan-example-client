import {Entity, validatedResource, association} from 'aurelia-orm';
import {ValidationRules} from 'aurelia-validation';
import {observable} from 'aurelia-binding';

@validatedResource('list')
export class ListEntity extends Entity {
  name = null;

  @observable()
  @association({collection: 'todo'})
  todos = [];

  constructor() {
    super();

    ValidationRules
      .ensure('name').required()
      .on(this);
  }
}
