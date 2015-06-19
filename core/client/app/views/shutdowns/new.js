import Ember from 'ember';
import EditorViewMixin from 'ghost/mixins/editor-base-view';

var ShutdownsNewView = Ember.View.extend(EditorViewMixin, {
    tagName: 'section',
    templateName: 'shutdowns/edit',
    classNames: ['gh-view']
});

export default ShutdownsNewView;
