import {Entity, resource, association} from 'aurelia-orm';

@resource('list')
export class ListEntity extends Entity {
  name = null;

  @association({collection: 'todo'})
  todos = [];
}
