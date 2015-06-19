import Ember from 'ember';
import EditorControllerMixin from 'ghost/mixins/editor-base-controller';

var LookaheadNewController = Ember.Controller.extend(EditorControllerMixin, {
    tagOnSave: 'lookahead',
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
                    self.replaceRoute('lookahead.edit', model);
                }
            });
        },
        setCoverImage: function (image) {
            var self = this;
            this.set('model.image', image);
            if (this.get('model.isNew')) {
                return;
            }

            this.get('model').save().catch(function (errors) {
                self.showErrors(errors);
                self.get('model').rollback();
            });
        },
        clearCoverImage: function () {
            var self = this;
            console.log("clearCoverImage called?");
            // this.set('model.image', '');

            // if (this.get('model.isNew')) {
            //     return;
            // }

            // this.get('model').save().catch(function (errors) {
            //     self.showErrors(errors);
            //     self.get('model').rollback();
            // });
        },
    }
});

export default LookaheadNewController;
