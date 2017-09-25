# The CSES Server

This project was generated with
[Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

First things first, make sure you have Node.js installed on your machine, and
then run "npm install" in the root directory of this repo.

Run `npm run serve:watch` in one terminal and `npm run build:watch` for a dev
server, the serve command starts the server stored under /server, which provides
the controllers and database access routines, and the ngbuild command compiles
the typescript files stored under /src into the dist directory, which provides
the views. Navigate to `http://localhost:2999/`. The app will automatically
reload if you change any of the source files.

> *Note:* You will need a .env file in the root directory of this project for
some of the features to work properly (fetching Facebook events). The site
should run fine without it, but in case you were wondering, an example is
included at the bottom of this section. To get the accessToken and appSecret
you will need to mail mbland@ucsd.edu, as they require special permissions to
the CSES facebook page.

```javascript
accessToken='ACCESS_TOKEN'
appSecret='APPLICATIONSECRET'
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the
`dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via
[Karma](https://karma-runner.github.io). Currently, given the scope of this
project, there are no testing guidelines, however, showing some in the case of
complex functionality is helpful.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via
[Protractor](http://www.protractortest.org/). Before running the tests make
sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
. If you are new to web development, read up on node.js and angular 2,
or email mbland@ucsd.edu.
