/* 
 * controllers.js
 * Define controllers for app
 */

// MainCtrl
// Used for controlling collapse state for mobile view
app.controller('mainCtrl', function($scope, infoService, stateService, $location) {
    $scope.infoService = infoService;
    $scope.stateService = stateService;
    
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
    
    infoService.getTitles(); // get titles for all pages
    infoService.getTranslations($scope, 'main');
});

// Controllers for each page
app.controller('homeCtrl', function($scope, $location, infoService) {
    $scope.pageClass = 'home';
    if ($location.path() === "/") {
        infoService.setClass('');
    } else {
        infoService.setClass('home');
    }
    infoService.setDescription("Takeshi Mochida. Student and Developer.");
    infoService.getTranslations($scope, $scope.pageClass);
});

app.controller('aboutCtrl', function($scope, infoService) {
    $scope.pageClass = 'about';
    infoService.setClass('about');
    infoService.setDescription("Takeshi Mochida. About Me");
});

app.controller('resumeCtrl', function($scope, infoService) {
    $scope.pageClass = 'resume';
    infoService.setClass('resume');
    infoService.setDescription("Takeshi Mochida. Resume");
});

app.controller('projectsCtrl', function($scope, infoService) {
    $scope.pageClass = 'projects';
    infoService.setClass('projects');
    infoService.setDescription("Takeshi Mochida. Projects");
});

app.controller('contactCtrl', function($scope, infoService) {
    $scope.pageClass = 'contact';
    infoService.setClass('contact');
    infoService.setDescription("Takeshi Mochida. Lets get in touch.");
    infoService.getTranslations($scope, $scope.pageClass);
});

