App.Models.Bus = Backbone.Model.extend({
    idAttribute: "ligne",

    urlRoot: "http://api-ratp.pierre-grimaud.fr/v2/bus/",

    // Parse and cast response
    parse: function (response) {
        console.log(response);
    },
});