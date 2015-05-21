// Service for displaying translations based on locale

app.factory('translationService', function($cookies, $resource, $window) {
    var DEFAULT_LOCALE = 'en';

    // set locale cookie to default if it doesn't exist
    if (typeof($cookies.locale) == 'undefined') {
        $cookies.locale = DEFAULT_LOCALE;
    }

    return {
        getLocale: function() {
            return $cookies.locale;
        },
        setLocale: function(newLocale) {
            $cookies.locale =  newLocale;
            $window.location.reload();
        },
        getTranslations: function($scope, className) {
            var locale = this.getLocale();
            var filePath = 'translations/' + locale + '/' + className + '.json';
            $resource(filePath).get(function (data) {
                if (typeof(data) != 'undefined') {
                    $scope.texts = data;
                }
            });
        },
    };
});
