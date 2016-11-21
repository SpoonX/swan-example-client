# swan-example-client

A showcase client, which includes auth, orm, datatable and more, including:

- Making separate lists
- Creating items in todo lists
- User separated
- User authorization
- Demonstration of components

## Demo
You can find a running demo here: http://swan-example.spoonx.org/

Username: example
Password: example

## Installing
For installation, follow the instructions on the [project repository](https://github.com/SpoonX/swan-example).

## What
swan-example-client is part of an example project to demonstrate several high-level components provided by SpoonX. For more info go to the [project repository](https://github.com/SpoonX/swan-example).

The component demonstrates:

- [aurelia-authentication](https://github.com/SpoonX/aurelia-authentication)
- [aurelia-api](https://github.com/SpoonX/aurelia-api)
- [aurelia-orm](https://github.com/SpoonX/aurelia-orm)
- [aurelia-notification](https://github.com/SpoonX/aurelia-notification)
- [aurelia-datatable](https://github.com/SpoonX/aurelia-datatable)
- [aurelia-pager](https://github.com/SpoonX/aurelia-pager)
- [aurelia-form](https://github.com/SpoonX/aurelia-form)

## Build tasks

### `gulp bundle`
Creates a production-ready build in the `dist/` directory. On windows, admin rights at needed for symlinking.
The contents of this directory can be uploaded and served to visitors.
You can use `gulp serve-bundle` to check the resulting bundle.

### `gulp watch`
Transpiles to `.dev` (the new "`dist`"). This has been optimized in performance (no unneeded copying of files).
