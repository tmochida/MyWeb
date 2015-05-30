// Service for meta descriptions

app.factory('metaService', function() {
    var metaDescription = "";

    return {
        getDescription: function() {
            return metaDescription;
        },
        setDescription: function(description) {
            metaDescription = description;
        }
    };
});
