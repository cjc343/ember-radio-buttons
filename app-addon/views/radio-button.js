import Ember from 'ember';

export default Ember.View.extend({
    tagName: 'input',
    type: 'radio',
    attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

    htmlChecked: function() {
        return this.get('value') === this.get('checked');
    }.property('value', 'checked'),

    change: function() {
        this.set('checked', this.get('value'));
    },

    _updateElementValue: function() {
        Ember.run.next(this, function() {
          if (!this.get('isDestroying')) {
            this.$().prop('checked', this.get('htmlChecked'));
          }
        });
    }.observes('htmlChecked')
});
