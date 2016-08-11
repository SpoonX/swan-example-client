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
  }, {
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

  let removeTag = (tag, index, $event) => {
    model.tags.splice(index, 1);
  };

  let addTag = (tag, index, $event) => {
    model.tags.push({
      name : '',
      color: '#ffffff'
    });
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
    },
    {
      type   : 'buttons',
      actions: [{
        label     : 'remove',
        action    : removeTag,
        attributes: {
          class: 'btn btn-warning',
        }
      }]
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
      }]
    }
  ];

  return {schema, model};
}

function petOwnerForm(bindingEngine) {
  let petsModel   = ['cat', 'dog'];
  let petsOptions = [];

  let calculatePetsOptions = () => {
    /* empty the array */
    petsOptions.length = 0;
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
        {name: 'Other'},
        {value: 'Basic'},
        {name: 'Premium', value: 'premium'}
      ]
    },
    {
      key    : 'pets',
      type   : 'checkboxes',
      options: [{
        name : 'Parrot',
        value: 'parrot'

      }, {
        name : 'Dog',
        value: 'dog'
      }, {
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
    email   : 'info@spoonx.nl',
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
