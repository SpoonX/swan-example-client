import {inject} from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";
import {Notification} from "aurelia-notification";

@inject(EntityManager, Notification)
export class List {
  constructor(entityManager, notification) {
    this.notification   = notification;
    this.listRepository = entityManager.getRepository('list');
    this.entityManager  = entityManager;
  }

  attached() {
    return this.listRepository.find()
      .then(lists => this.lists = lists);
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
    todo.todo = prompt('What is it you need to do?');

    list.todos.push(todo);

    list.save()
      .then(() => {
        this.notification.success('Todo created successfully!');
      })
      .catch(() => {
        this.notification.error('Something went wrong!');
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
