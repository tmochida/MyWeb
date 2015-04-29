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
    $scope.pageClass = 'home';
});

app.controller('aboutCtrl', function($scope) {
    $scope.pageClass = 'about';
});

app.controller('resumeCtrl', function($scope) {
    $scope.pageClass = 'resume';
});

app.controller('projectsCtrl', function($scope) {
    $scope.pageClass = 'projects';
});

app.controller('contactCtrl', function($scope) {
    $scope.pageClass = 'contact';
});

