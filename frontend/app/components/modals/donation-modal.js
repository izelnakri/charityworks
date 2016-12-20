import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed('model.@each', function() {
    return `Donate for ${this.get('model.title')}`;
  })
});
