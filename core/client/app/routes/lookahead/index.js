import Ember from 'ember';
var EditorRoute = Ember.Route.extend({
    beforeModel: function () {
        this.transitionTo('lookahead.new');
    }
});

export default EditorRoute;
