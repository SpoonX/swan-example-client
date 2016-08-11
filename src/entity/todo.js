import {Entity, resource, type} from 'aurelia-orm';

@resource('todo')
export class TodoEntity extends Entity {
  //@type('string')
  todo = '';

  //@type('boolean')
  done = false;
}
