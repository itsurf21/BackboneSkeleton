Mod.setRouter(Backbone.Router.extend({
    routes: {
        'error/:msg': 'error',
        'show/form': 'showForm'
    },

    error: function (msg) {
        console.log(msg);
    },

    showForm: function () {
        this.module.getController('formController').showForm();
    }
}));