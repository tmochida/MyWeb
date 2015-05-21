// Service to get canvas width and height

app.factory('canvasService', function($window) {
    return {
        width: function() {
            return $window.innerWidth;
        },
        height: function() {
            return $window.innerHeight;
        }
    };
});
