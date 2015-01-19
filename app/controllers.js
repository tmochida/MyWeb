/* 
 * controllers.js
 * Define controllers for app
 */

// MainCtrl
// Used for controlling collapse state for mobile view
app.controller('mainCtrl', function($scope, collapseService) {
  $scope.collapseService = collapseService;
});

// Controller for navbar
app.controller('navBarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

// Declare controllers. Nothing happens for now
app.controller('homeCtrl', function($scope) {
});

app.controller('aboutCtrl', function($scope) {
});

app.controller('resumeCtrl', function($scope) {
});

app.controller('projectsCtrl', function($scope) {
});

app.controller('contactCtrl', function($scope) {
});

