import {Entity, resource, type} from 'aurelia-orm';

@resource('todo')
export class TodoEntity extends Entity {
  todo = '';

  done = false;
}
