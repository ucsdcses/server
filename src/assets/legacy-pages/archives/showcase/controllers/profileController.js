angularApp.controller('profileController', function ($scope, $location, stringService) {
  if (!isLoggedIn())
    $location.path('404');

  $('#your-modal-id').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  function refresh() {
    $scope.loading = true;
    $.ajax({
      method: 'GET',
      url: '/api/users/me',
      success: function (data, textStatus, xhr) {
        $scope.$apply(function () {
          $scope.user = data;
          $scope.loading = false;
        });
      },
      error: function (xhr, textStatus, err) {
        $scope.$apply(function () {
          if (xhr.status === 401)
            $location.path('login');
          else
            $location.path('404');
        });
      }
    });
  }

  refresh();

  $scope.unlink = function () {
    $scope.loading = true;
    $.ajax({
      method: 'POST',
      url: '/api/facebook/unlink',
      success: function () {
        refresh();
      },
      error: function (xhr, textStatus, err) {
        $scope.$apply(function () {
          handleError(xhr);
        });
      }
    });
  };


  $scope.link = function () {
    $scope.loading = true;
    FB.login(function (response) {
      if (response.status !== 'connected') { // User cancelled the FB login
        $scope.$apply(function () {
          $scope.loading = false;
        });
        return;
      }

      $.ajax({
        url: '/api/facebook/link',
        method: 'POST',
        data: {id: response.authResponse.userID, token: response.authResponse.accessToken},
        success: function () {
          refresh();
        },
        error: function (xhr, textStatus, err) {
          $scope.$apply(function () {
            handleError(xhr);
          });
        }
      });
    });
  };

  $scope.update = function () {
    var user = $scope.user;
    if (!stringService.isValidEmail(user.email) || (user.github && !stringService.isValidGithubURL(user.github)))
      return;


    $scope.loading = true;
    $.ajax({
      method: 'PUT',
      url: '/api/users/me',
      data: user,
      success: function (data) {
        refresh();
      },
      error: function (xhr, textStatus, err) {
        $scope.$apply(function () {
          handleError(xhr);
        });
      }
    });
  };

  $scope.emailError = function (email) {
    if (email && !stringService.isValidEmail(email))
      return 'Please Enter a valid UCSD email.';
  };

  $scope.githubError = function (github) {
    if (github && !stringService.isValidGithubURL(github))
      return 'Please enter a valid Github URL.';
  };
  
  function handleError(xhr) {
    switch (xhr.status) {
      case 401:
        $location.path('login');
        break;
      case 400:
        $scope.error = xhr.responseJSON.error;
        refresh();
        break;
      default:
        $scope.error = 'An unknown error occurred. Please try again later.';
        refresh();
    }
  }
});