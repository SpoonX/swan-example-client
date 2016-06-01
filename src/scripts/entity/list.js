import {Entity, validatedResource, association} from 'aurelia-orm';

@validatedResource('list')
export class ListEntity extends Entity {
  name = null;

  @association({collection: 'todo'})
  todos = [];
}
