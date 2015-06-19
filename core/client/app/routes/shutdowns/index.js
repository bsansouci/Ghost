import Ember from 'ember';
var EditorRoute = Ember.Route.extend({
    beforeModel: function () {
        this.transitionTo('shutdowns.new');
    }
});

export default EditorRoute;
