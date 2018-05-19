import {inject, NewInstance} from 'aurelia-dependency-injection';
import {EntityManager} from 'aurelia-orm';
import {Notification} from 'aurelia-notification';
import {ValidationController} from 'aurelia-validation';
import {I18N} from 'aurelia-i18n';

@inject(EntityManager, Notification, NewInstance.of(ValidationController), I18N)
export class List {
  constructor(entityManager, notification, controller, i18n) {
    this.notification   = notification;
    this.listRepository = entityManager.getRepository('list');
    this.entityManager  = entityManager;
    this.controller     = controller;
    this.i18n           = i18n;
  }

  attached() {
    return this.listRepository.find()
      .then(lists => {
        this.lists = lists;
      });
  }

  destroy(index) {
    let list = this.lists[index];

    list.destroy()
      .then(() => {
        this.lists.splice(index, 1);
        this.notification.success('List deleted successfully!');
      })
      .catch(() => {
        this.notification.error('Something went wrong!');
      });
  }

  save(list) {
    list.save()
      .then(() => {
        this.notification.success('List saved successfully!');
      })
      .catch(() => {
        this.notification.error('Something went wrong!');
      });
  }

  destroyTodo(list, index) {
    list.todos.splice(index, 1);

    list.save()
      .then(() => {
        this.notification.success('Todo removed successfully!');
      })
      .catch(() => {
        this.notification.error('Something went wrong!');
      });
  }

  addTodo(list) {
    let todo  = this.entityManager.getEntity('todo');

    todo.todo = prompt(this.i18n.tr('What is it you need to do?')); // eslint-disable-line no-alert

    todo.validate()
      .then(v => {
        if (v.length === 0) {
          list.todos.push(todo);

          return list.save()
            .then(() => {
              this.notification.success('Todo created successfully!');

            })
            .catch(err => {
              list.todos.pop();

              throw err;
            });
        }

        throw v[0];
      })
      .catch(err => {
        this.notification.error(err.message);
      });
  }

  updated(todo) {
    todo.done = !todo.done;

    todo.save()
      .then(() => {
        this.notification.success('Todo saved successfully!');
      })
      .catch(() => {
        this.notification.error('Something went wrong!');
      });

    return true;
  }

  keypress(event, list) {
    if (event.which !== 13) {
      return true;
    }

    event.preventDefault();

    return this.save(list);
  }
}
