import Ember from 'ember';
import FormComponentMixin from 'frontend/mixins/form-component';

const { Component, computed } = Ember;

export default Component.extend(FormComponentMixin, {
  classNameBindings: ['group:form-group', ':cl-checkbox'],
  group: true,
  checked: computed('model.[]', 'attribute', function() {
    return this.get('model').get(`${this.get('attribute')}`);
  }),
  change() {
    let reference = `model.${this.get('attribute')}`;
    return this.set(reference, !this.get(reference));
  }
});
