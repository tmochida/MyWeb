/* 
 * controllers.js
 * Define controllers for app
 */

// MainCtrl
// Used for controlling collapse state for mobile view
app.controller('mainCtrl', function($scope, collapseService, canvasService, metaService, titleService, translationService) {
  titleService.getTitles(); // get titles for all pages
  translationService.getTranslations($scope, 'main');
  
  $scope.collapseService = collapseService;
  $scope.canvasService = canvasService;
  $scope.metaService = metaService;
  $scope.translationService = translationService;
  $scope.titleService = titleService;
});

// Controller for navbar
app.controller('navBarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

// Declare controllers. Nothing happens for now
app.controller('homeCtrl', function($scope, $location, metaService, titleService, translationService) {
    $scope.pageClass = 'home';
    if ($location.path() === "/") {
        titleService.setClass('');
    } else {
        titleService.setClass('home');
    }
    translationService.getTranslations($scope, $scope.pageClass);

    metaService.setDescription("Takeshi Mochida. Student and Developer.");
});

app.controller('aboutCtrl', function($scope, metaService, titleService, translationService) {
    $scope.pageClass = 'about';
    titleService.setClass('about');
    metaService.setDescription("Takeshi Mochida. About Me");
});

app.controller('resumeCtrl', function($scope, metaService, titleService, translationService) {
    $scope.pageClass = 'resume';
    titleService.setClass('resume');
    metaService.setDescription("Takeshi Mochida. Resume");
});

app.controller('projectsCtrl', function($scope, metaService, titleService, translationService) {
    $scope.pageClass = 'projects';
    titleService.setClass('projects');
    metaService.setDescription("Takeshi Mochida. Projects");
});

app.controller('contactCtrl', function($scope, metaService, titleService, translationService) {
    $scope.pageClass = 'contact';
    titleService.setClass('contact');
    translationService.getTranslations($scope, $scope.pageClass);
    metaService.setDescription("Takeshi Mochida. Lets get in touch.");
});

