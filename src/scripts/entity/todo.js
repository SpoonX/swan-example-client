import {Entity, validatedResource, type} from 'aurelia-orm';
import {ValidationRules} from 'aurelia-validation';
import {observable} from 'aurelia-binding';

@validatedResource('todo')
export class TodoEntity extends Entity {
  @observable()
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
