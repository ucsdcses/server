angularApp.controller('registerController', function ($scope, $location, stringService, Facebook) {
  if (isLoggedIn())
    $location.path('home');
  $scope.submitting = false;
  $scope.error = null;

  $('#your-modal-id').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  $scope.register = function () {
    if ($scope.submitting)
      return;

    if (!stringService.isValidEmail($scope.email)
      || stringService.passwordWeakness($scope.password)
      || ($scope.github && !stringService.isValidGithubURL($scope.github))) {
      return;
    }

    $scope.submitting = true;
    var formData = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      password: $scope.password
    };

    if ($scope.github)
      formData.github = $scope.github;

    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        formData.facebookId = response.authResponse.userID;
        formData.facebookToken = response.authResponse.accessToken;
      }

      $.ajax({
        url: '/api/register',
        method: 'POST',
        data: formData,
        success: function (data, textStatus, xhr) {
          if (response.status !== 'connected') {
            $('#modal-link-fb').modal('show');
            $('.modal-backdrop').removeClass("modal-backdrop");
          } else {
            $scope.$apply(function () {
              $location.path('home');
            });
          }
        },
        error: function (xhr, textStatus, err) {
          $scope.$apply(function () {
            $scope.submitting = false;
            if (xhr.status === 400 && xhr.responseJSON.error) {
              $scope.error = xhr.responseJSON.error;
            } else {
              $scope.error = 'An unknown error occurred. Please try again later.';
            }
          });
        }
      });
    });
  };

  $scope.linkFb = function () {
    FB.login(function (response) {
      $.ajax({
        url: '/api/facebook/link',
        method: 'POST',
        data: {id: response.authResponse.userID, token: response.authResponse.accessToken},
        success: function () {
          $scope.$apply(function () {
            $location.path('home');
          });
        },
        error: function (xhr, textStatus, err) {
          $scope.$apply(function () {
            $scope.linkError = (xhr.status === 400) ? xhr.responseJSON.error : 'An unknown error occurred. Please try again later.';
          });
        }
      });
    });
  };

  $scope.emailError = function (email) {
    if (email && !stringService.isValidEmail(email))
      return 'Please Enter a valid UCSD email.';
  };

  $scope.passwordError = function (password) {
    if (password) {
      return stringService.passwordWeakness(password);
    }
  };

  $scope.githubError = function (github) {
    if (github && !stringService.isValidGithubURL(github))
      return 'Please enter a valid Github URL.';
  };

  Facebook.getLoginStatus(function (response) {
    if (response.status === 'connected') {
      Facebook.api('/me', {fields: 'first_name,last_name'}, function (res) {
        $scope.$apply(function () {
          $scope.firstName = res.first_name;
          $scope.lastName = res.last_name;
        });
      });
    }
  });
});