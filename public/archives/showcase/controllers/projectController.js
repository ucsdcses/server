angularApp.controller('projectController', function ($scope, $http, $routeParams, $location) {
  $.ajax({
    url: '/api/showcase/project/',
    data: {id: $routeParams.id},
    method: 'GET',
    success: function (data, statusText, xhr) {
      $scope.$apply(function () {
        $scope.project = data;
      });
    },
    error: function (xhr, textStatus, err) {
      $scope.$apply(function () {
        $location.path('404');
      });
    }
  });

  $scope.deleteProject = function () {
    $scope.deletingProject = true;
    $.ajax({
      method: 'DELETE',
      url: '/api/showcase/project/',
      data: {id: $scope.project._id},
      success: function () {
        $('#modal-delete').modal('hide');
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
        $scope.$apply(function () {
          $location.path('home');
        });
      },
      error: function () {
        $scope.$apply(function () {
          $scope.deletingProject = false;
        });
      }
    });
  };
});