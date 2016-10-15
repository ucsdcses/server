angularApp.controller('homeController', function($scope, $location) {
  $scope.loading = true;
  var timestamp;
  $.ajax({
    url: '/api/showcase/project/cluster/',
    method: 'GET',
    success: function (data, status, xhr) {
      $scope.$apply(function(){
        $scope.projects = data.projects;
        $scope.loading = false;
        timestamp = data.timestamp;
      });
    }
  });


  $scope.loadMore = function () {
    $scope.loading = true;
    $.ajax({
      method: 'GET',
      url: '/api/showcase/project/cluster',
      data: {timestamp: timestamp},
      success: function (data, textStatus, xhr) {
        $scope.$apply(function () {
          $scope.projects.push.apply($scope.projects, data.projects);
          $scope.loading = false;
          timestamp = data.timestamp;
        });
      },
      error: function (xhr) {
        $scope.$apply(function () {
          $scope.loading = false;
        });
      }
    });
  };
});