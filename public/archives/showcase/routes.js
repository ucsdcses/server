var angularApp = angular.module('Showcase', ['ngRoute', 'facebook', 'vcRecaptcha']);
angularApp.config(function ($routeProvider, $locationProvider, FacebookProvider) {
    FacebookProvider.init('1556297577996940');
    $routeProvider
      .when('/home', {
        templateUrl: './partials/home.html',
        controller: 'homeController'
      })
      .when('/register', {
        templateUrl: './partials/register.html',
        controller: 'registerController'
      })
      .when('/404', {
        templateUrl: './partials/404.html'
      })
      .when('/project/edit/:id', {
        templateUrl: './partials/editProject.html',
        controller: 'editProjectController'
      })
      .when('/project/:id', {
        templateUrl: './partials/project.html',
        controller: 'projectController'
      })
      .when('/login', {
        templateUrl: './partials/login.html',
        controller: 'loginController'
      })
      .when('/submit', {
        templateUrl: './partials/submit.html',
        controller: 'submitController'
      })
      .when('/profile', {
        templateUrl: './partials/profile.html',
        controller: 'profileController'
      })
      .when('/', {
        redirectTo: 'home'
      })
      .otherwise({
        redirectTo: '404'
      });

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope) {
    $rootScope.isLoggedIn = isLoggedIn;
  });