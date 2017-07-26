angularApp.controller('submitController', function ($scope, $location) {
  if (!isLoggedIn())
    $location.path('home');

  $scope.submitting = false;
  $scope.project = {
    authors: []
  };

  $('#your-modal-id').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  $scope.submit = function() {
    if ($scope.submitting)
      return;
    
    if (!$scope.project.reCaptchaResponse) {
      $scope.error = 'Please prove that you\'re not a robot.';
      return;
    }

    $scope.submitting = true;
    $scope.error = null;

    $.ajax({
      url: '/api/showcase/project',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify($scope.project),
      success: function (data, status, xhr) {
        $scope.$apply(function () {
          $location.path('project/' + data.id);
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