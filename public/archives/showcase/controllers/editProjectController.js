angularApp.controller('editProjectController', function ($scope, $http, $routeParams, $location) {
  if (!isLoggedIn()) {
    $location.path('404');
  }

  $('#your-modal-id').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  
  $.ajax({
    url: '/api/showcase/project/',
    data: {id: $routeParams.id, excludeMe: true},
    method: 'GET',
    success: function (data, statusText, xhr) {
      $scope.$apply(function () {
        if (!data.owned)
          $location.path('404');
        else
          $scope.project = data;
      });
    },
    error: function (xhr, textStatus, err) {
      $scope.$apply(function () {
        $location.path('404');
      });
    }
  });

  $scope.submitting = false;

  $scope.save = function () {
    if ($scope.submitting)
      return;

    $scope.submitting = true;
    $scope.error = null;

    $.ajax({
      url: '/api/showcase/project',
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify($scope.project),
      success: function (data, status, xhr) {
        $scope.$apply(function () {
          $location.path('project/' + $scope.project._id);
        });
      },
      error: function (xhr, textStatus, err) {
        $scope.$apply(function () {
          $scope.submitting = false;
          if (xhr.status === 400)
            $scope.error = xhr.responseJSON.error;
          else if (xhr.status === 401)
            $location.path('login');
          else
            $scope.error = 'An unknown error occurred. Please try again later.';
        });
      }
    });
  };
});