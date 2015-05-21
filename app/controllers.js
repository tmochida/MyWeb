/* 
 * controllers.js
 * Define controllers for app
 */

// MainCtrl
// Used for controlling collapse state for mobile view
app.controller('mainCtrl', function($scope, collapseService, canvasService, translationService) {
  $scope.collapseService = collapseService;
  $scope.canvasService = canvasService;
  $scope.translationService = translationService;
});

// Controller for navbar
app.controller('navBarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

// Declare controllers. Nothing happens for now
app.controller('homeCtrl', function($scope, translationService) {
    $scope.pageClass = 'home';
});

app.controller('aboutCtrl', function($scope, translationService) {
    $scope.pageClass = 'about';
});

app.controller('resumeCtrl', function($scope, translationService) {
    $scope.pageClass = 'resume';
});

app.controller('projectsCtrl', function($scope, translationService) {
    $scope.pageClass = 'projects';
});

app.controller('contactCtrl', function($scope, translationService) {
    $scope.pageClass = 'contact';
});
