angularApp.controller('contributorsPickerController', function ($scope) {
  $scope.results = [];
  $scope.query = "";

  $scope.search = function () {
    if (!$scope.query) {
      $scope.results = [];
      return;
    }

    $.ajax({
      method: 'GET',
      url: '/api/users',
      data: {query: $scope.query, limit: 5},
      success: function (data, textStatus, xhr) {
        var results = [];
        for (var i = 0; i < data.length; i++) {
          var valid = true;
          for (var j = 0; j < $scope.project.authors.length; j++) {
            if (data[i]._id === $scope.project.authors[j]._id) {
              valid = false;
              break;
            }
          }
          if (valid)
            results.push(data[i]);
        }

        $scope.$apply(function () {
          $scope.results = results;
        });
      }
    });
  };


  $scope.select = function (user) {
    $scope.project.authors.push(user);
    $scope.results = [];
    $scope.query = "";
  };

  $scope.deselect = function (user) {
    var index = $scope.project.authors.indexOf(user);
    $scope.project.authors.splice(index, 1);
  };
});