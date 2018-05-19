import {inject, NewInstance} from "aurelia-dependency-injection";
import {EntityManager} from "aurelia-orm";
import {Router} from "aurelia-router";
import {Notification} from "aurelia-notification";
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {FormRendererBootstrap} from 'aurelia-form-renderer-bootstrap';

@inject(EntityManager, Router, Notification, NewInstance.of(ValidationController))
export class CreateList {
  constructor(entityManager, router, notification, controller) {
    this.notification = notification;
    this.router       = router;
    this.list         = entityManager.getEntity('list');
    this.controller   = controller;

    this.controller.addRenderer(new FormRendererBootstrap());
    this.controller.validateTrigger = validateTrigger.change;
  }

  save() {
    this.controller.validate().then(v => {
      if (v.length === 0) {
        return this.list.save()
          .then(() => {
            this.notification.success('List saved successfully!');
            this.router.navigate('lists');
        })
      }
      throw v[0];
    })
    .catch(() => {
      // error is displayed on the form using FormRendererBootstrap
    });
  }
}
