// Service for title

app.factory('titleService', function($resource, $http, $q, translationService) {
    var DEFAULT_TITLE = "Takeshi Mochida";
    var titles = {};
    var pageClass = "";

    return {
        getTitles: function($scope) {
            var locale = translationService.getLocale();
            var filePath = 'translations/' + locale + '/titles.json';
            
            return $http.get(filePath)
                .then(function(response) {
                    if (typeof response.data != 'undefined') {
                        titles = response.data;
                        DEFAULT_TITLE = titles.default;
                    }
                });
        },
        getTitle: function() {
            if(pageClass === "") {
                return DEFAULT_TITLE;
            } else {
                return titles[pageClass] + titles.suffix;
            }
        },
        setTitle: function(newTitle) {
            title = newTitle + titles.default;
        },
        tmp: function() {
            return titles.resume + titles.suffix;
        },
        tmp2: function() {
            return titles['default'] + titles.suffix;
        },
        setClass: function(newClass) {
            pageClass = newClass;
        }
    };
});
