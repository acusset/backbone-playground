App.Router = Backbone.Router.extend({

    routes: {
        "blog": "blogAction",
        "article/:page": "pageAction",
        "*actions": "defaultRoute"
    },

    defaultRoute: function () {
        console.log("je suis sur la page par default");
    },

    blogAction: function () {
        console.log("Je suis sur le blog")
    },

    pageAction: function (page) {
        if (page < 0 || page > 10) {
            this.navigate("article/1", {"trigger": false, "replace": false});
        }
        console.log("Je suis à la page " + page);
    }
});