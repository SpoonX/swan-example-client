# swan-example-client

A trello-like todo client, and other examples featuring:

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
From the project folder, execute the following commands:

```shell
npm install
```

And follow the instructions on the [project repository](https://github.com/SpoonX/swan-example).

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

To run the app execute the following command:

```shell
npm start
```

This command starts the webpack development server that serves the build bundles.
You can now browse the skeleton app at http://localhost:9000. Changes in the code
will automatically build and reload the app.

## Bundling

To build a development bundle (output to /dist) execute:

```shell
npm run build
```

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm run build:prod
```

To test either the development or production build execute:

```shell
npm run server:prod
```

The production bundle includes all files that are required for deployment.
