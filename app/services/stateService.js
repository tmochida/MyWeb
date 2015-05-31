// Service for storing states

app.factory('stateService', function($window) {
    var isCollapsed = true;

    return {
        width: function() {
            return $window.innerWidth;
        },
        height: function() {
            return $window.innerHeight;
        },
        getState: function() {
            return isCollapsed;
        },
        toggleMenu: function() {
            if(this.width() < 768) {
                isCollapsed = !isCollapsed;
            }
        }
    };
});
