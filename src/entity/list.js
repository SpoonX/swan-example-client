import {Entity, validatedResource, association} from 'aurelia-orm';
import {ValidationRules} from 'aurelia-validation';

@validatedResource('list')
export class ListEntity extends Entity {
  name = null;

  @association({collection: 'todo'})
  todos = [];

  constructor() {
    super();

    ValidationRules
      .ensure('name').required()
      .on(this);
  }
}
