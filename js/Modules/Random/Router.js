Mod_Random.setRouter(Backbone.Router.extend({
    routes: {
        'random/:msg': 'showMsgAndRandom'
    },

    showMsgAndRandom: function () {
        this.module.getController('')
    }
}));

