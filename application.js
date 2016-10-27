var Mod = new Backbone.Module;

Mod_Random = new Backbone.Module();
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
Mod_Random.setRouter(Backbone.Router.extend({
    routes: {
        'random/:msg': 'showMsgAndRandom'
    },

    showMsgAndRandom: function () {
        this.module.getController('')
    }
}));


Mod.addControllerClass('consoleController', Backbone.Controller.extend({
    log: function (message) {
        console.log(message);
    },

    error: function (message) {
        throw new Error(message);
    }
}));
Mod.addControllerClass('formController', Backbone.Controller.extend({
    showForm: function () {
        this.module.getView('form').render();
    }
}));
        
Mod_Random.addControllerClass('RandomController', Backbone.Controller.extend({
    showRandom: function () {
        //App.Models.randomModel.fetch(...)
        var random = Math.random();
        this.module.getView('')
    }
}));

Mod.addViewClass('form', Backbone.View.extend({
    el: '.form',
    template: _.template($('#form').text()),

    render: function () {
        console.log(this.template());
        this.$el.html(this.template());
        this.$el.find('.form__button').on('click', {view: this}, this.buttonClick);
    },

    buttonClick: function (event) {
        var msg = $(event.data.view.el).find(".form__input").val();
        var controller = event.data.view.module.getController('consoleController');
        controller.error(msg);
    }
}));
Mod_Random.addViewClass('RandomView', Backbone.View.extend({
    el
}));