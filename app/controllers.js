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

    // set offset
    $scope.offsetHeight = (stateService.height()-140)/3;

    $scope.email = "tmochida@takeshimochida.com";
});

// Controllers for each page
app.controller('homeCtrl', function($scope, $location, infoService) {
    $scope.pageClass = 'home';
    if ($location.path() === "/") {
        infoService.setClass('');
    } else {
        infoService.setClass('home');
    }
    infoService.setDescription("Takeshi Mochida studies Computer Science at the University of California, Berkeley.");
    infoService.getTranslations($scope, $scope.pageClass);
});

app.controller('aboutCtrl', function($scope, infoService) {
    $scope.pageClass = 'about';
    infoService.setClass('about');
    infoService.setDescription("About Takeshi Mochida.");
});

app.controller('resumeCtrl', function($scope, infoService) {
    $scope.pageClass = 'resume';
    infoService.setClass('resume');
    infoService.setDescription("Takeshi Mochida's resume");
});

app.controller('projectsCtrl', function($scope, infoService) {
    $scope.pageClass = 'projects';
    infoService.setClass('projects');
    infoService.setDescription("Projects worked on by Takeshi Mochida.");
});

app.controller('contactCtrl', function($scope, infoService) {
    $scope.pageClass = 'contact';
    infoService.setClass('contact');
    infoService.setDescription("How to get in touch with Takeshi Mochida.");
    infoService.getTranslations($scope, $scope.pageClass);
});

