import Ember from 'ember';

export default Ember.Service.extend({
  model: Ember.A(),

  open(name, model) {
    this.get('model').pushObject({
      name: name,
      componentName: `modals/${name}`,
      model: model,
      context: {}
    });
  },
  close() {
    this.get('model').shiftObject();
  }
});
