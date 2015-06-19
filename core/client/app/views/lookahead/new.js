import Ember from 'ember';
import EditorViewMixin from 'ghost/mixins/editor-base-view';

var LookaheadNewView = Ember.View.extend(EditorViewMixin, {
    tagName: 'section',
    templateName: 'lookahead/edit',
    classNames: ['gh-view']
});

export default LookaheadNewView;
