import {BindingEngine, inject} from 'aurelia-framework';
import {EntityManager} from "aurelia-orm";

@inject(BindingEngine, EntityManager)
export class Demo {

  constructor(bindingEngine, entityManager) {
    this.entity       = entityManager.getEntity('todo');
    this.petOwnerForm = petOwnerForm(bindingEngine);
    this.loginForm    = loginForm();
    this.productForm  = productForm();
    this.feedbackForm = feedbackForm();
  }

}

function feedbackForm() {
  let schema = [{
    key       : 'name',
    type      : 'string',
    attributes: {
      placeholder: 'name'
    }
  },
  {
    key : 'feedback',
    type: 'textarea'
  }];

  let model = {
    name    : '',
    feedback: 'I like your product'
  };

  return {schema, model};
}

function productForm() {
  let model = {
    name: 'Bread',
    tags: [
      {
        name : 'Basics',
        color: '#FF3333'
      },
      {
        name : 'Brown',
        color: '#992233'
      }
    ]
  };

  let removeButton = {
      label     : 'remove tag',
      action    : ($event) => {removeTag(model.tags.length - 1, $event);},
  attributes: {
  class: 'btn btn-warning'
  }
};

  let removeTag = (index, $event) => {
    model.tags.splice(index, 1);

    if (!model.tags.length) {
      return schema[2].actions.splice(1, 1);
    }
  };

  let addTag = (tag, index, $event) => {
    model.tags.push({
      name : '',
      color: '#ffffff'
    });

    if (schema[2].actions.length === 1) {
      schema[2].actions.push(removeButton);
    }
  };

  let tagSchema = [
    {
      key       : 'name',
      type      : 'string',
      attributes: {
        placeholder: 'tag name'
      }
    },
    {
      key : 'color',
      type: 'color'
    }
  ];

  let schema = [
    {
      key : 'name',
      type: 'string'
    },
    {
      key   : 'tags',
      type  : 'collection',
      schema: tagSchema
    },
    {
      type   : 'buttons',
      actions: [{
        label     : 'add tag',
        action    : addTag,
        attributes: {
          class: 'btn btn-primary'
        }
      }, removeButton]
    }
  ];

  return {schema, model};
}

function petOwnerForm(bindingEngine) {
  let petsModel   = ['cat', 'dog'];
  let petsOptions = [];

  let calculatePetsOptions = () => {
    petsOptions.length = 0; /* empty the array */
    petsModel.forEach(pet => {
      petsOptions.push({
        name : capitalize(pet),
        value: pet
      });
    });

    return petsOptions;
  };

  petsOptions = calculatePetsOptions();

  let model = {
    food    : 'other',
    favorite: 'cat',
    pets    : petsModel
  };

  let schema = [
    {
      key    : 'food',
      type   : 'select',
      options: [
        "Brand",
        {name : 'Other'},
        {value: 'Basic'},
        {name : 'Premium', value: 'premium'}
      ]
    },
    {
      key    : 'pets',
      type   : 'checkboxes',
      options: [{
        name : 'Parrot',
        value: 'parrot'

      },{
        name : 'Dog',
        value: 'dog'
      },{
        name : 'Cat',
        value: 'cat'
      }]
    },
    {
      key    : 'favorite',
      type   : 'radios',
      options: petsOptions
    }
  ];

  bindingEngine.collectionObserver(petsModel)
    .subscribe(calculatePetsOptions);

  return {model, schema};
}

function loginForm() {
  let model = {
    email   : 'spoonx@world.com',
    password: '',
    remember: false,
    pet     : ['dog']
  };

  let schema = [
    {
      key : 'email',
      type: 'email'
    },
    {
      key : 'password',
      type: 'password'
    },
    {
      key : 'remember',
      type: 'boolean'
    },
  ];

  return {model, schema};
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
