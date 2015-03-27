// Service to keep track of navbar collapse state in mobile view

app.factory('indexService', function() {
    var pageIndex = -1;
    return {
        index: function() { return pageIndex; },
        setIndex: function(index) { pageIndex = index; }
    };
});
