angularApp.controller('navbarController', function ($scope, $location, $http, Facebook) {
  $scope.logout = function() {
    $http({
      url: '/api/logout',
      method: 'POST'
    })
      .then(function () {
        $location.path('home');
      })
      .catch(function () {
        $location.path('home');
      });

    Facebook.logout(function (response) {
    });
  };

  $scope.showModal = true;
});