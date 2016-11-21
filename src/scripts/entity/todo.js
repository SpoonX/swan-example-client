import {Entity, validatedResource, type} from 'aurelia-orm';
import {ValidationRules} from 'aurelia-validation';

@validatedResource('todo')
export class TodoEntity extends Entity {

  @type('string')
  todo = '';

  @type('boolean')
  done = false;

  constructor() {
    super();

    ValidationRules
      .ensure('todo').required()
      .on(this);
  }
}
