// Service to keep track of navbar collapse state in mobile view

app.factory('collapseService', function($window) {
    var isCollapsed = true;
    return {
        getState: function() { return isCollapsed; },
        flipState: function() { if($window.innerWidth < 768) isCollapsed = !isCollapsed; }
    };
});
