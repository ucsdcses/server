angularApp.controller('loginController', function ($scope, $location, $http) {
  if (isLoggedIn())
    $location.path('home');

  $scope.submitting = false;

  $('#your-modal-id').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  $scope.login = function () {
    if ($scope.submitting)
      return;

    $scope.submitting = true;
    $scope.error = null;

    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: {
        email: $scope.email,
        password: $scope.password
      },
      success: function (data, textStatus, xhr) {
        $scope.$apply(function () {
          $location.path('home');
        });
      },
      error: function (xhr, textStatus, err) {
        $scope.$apply(function () {
          $scope.submitting = false;
          $scope.error = (xhr.status === 400) ?
            xhr.responseJSON.error : 'Unknown error occurred. Please try again later.';
        });
      }
    });
  };

  $scope.fbLogin = function () {
    $scope.submitting = true;

    FB.login(function(response) {
      if (response.status === 'connected') {
        $.ajax({
          url: '/api/facebook/login',
          method: 'POST',
          data: {
            id: response.authResponse.userID,
            token: response.authResponse.accessToken
          },
          success: function (data, textStatus, xhr) {
            $scope.$apply(function () {
              $location.path('home');
            });
          },
          error: function (xhr, textStatus, err) {
            $scope.$apply(function () {
              if (xhr.status === 401) {
                $location.path('register');
              } else {
                $scope.submitting = false;
                $scope.error = (xhr.status === 400) ?
                  xhr.responseJSON.error : 'Unknown error occurred. Please try again later.';
              }
            });
          }
        });
      }
    });
  };
});