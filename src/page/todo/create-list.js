import {inject} from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";
import {Router} from "aurelia-router";
import {Notification} from "aurelia-notification";

@inject(EntityManager, Router, Notification)
export class CreateList {
  constructor(entityManager, router, notification) {
    this.notification = notification;
    this.router       = router;
    this.list         = entityManager.getEntity('list');
  }

  save() {
    this.list.save()
      .then(() => {
        this.notification.success('List saved successfully!');
        this.router.navigate('lists');
      })
      .catch(() => {
        this.notification.error('Something went wrong!');
      });
  }
}
