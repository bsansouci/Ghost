import Ember from 'ember';
import EditorControllerMixin from 'ghost/mixins/editor-base-controller';

var ShutdownsNewController = Ember.Controller.extend(EditorControllerMixin, {
    tagOnSave: 'shutdowns',
    // Overriding autoSave on the base controller, as the new controller shouldn't be autosaving
    autoSave: Ember.K,
    showSuccess: function (message) {
        this.get('notifications').showSuccess(message);
    },
    actions: {
        /**
          * Redirect to editor after the first save
          */
        save: function (options) {
            var self = this;

            return this._super(options).then(function (model) {
                if (model.get('id')) {
                    self.replaceRoute('shutdowns.edit', model);
                }
            });
        }
    }
});

export default ShutdownsNewController;
