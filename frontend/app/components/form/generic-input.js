import Ember from 'ember';
import FormComponentMixin from 'frontend/mixins/form-component';

const { Component, computed } = Ember;

export default Component.extend(FormComponentMixin, {
  classNames: ['form-group'],
  addonLeft: undefined,
  addonRight: undefined,
  hint: undefined,
  required: false,
  inputGroup: computed('addonLeft', 'addonRight', function() {
    return this.get('addonLeft') || this.get('addonRight');
  }),
  keyUp() {
    this.updateModelValue();
  },
  change() {
    this.updateModelValue();
  },
  didRender() {
    switch (this.get('type')) {
      case 'currency':
        this.set('shadowValue', this.get('model').get(this.get('attribute')) / 100);
        this.$('input').val(this.get('shadowValue')).inputmask('decimal', {
          rightAlign: false,
          radixPoint: ".",
          digits: 2
        });
        break;
    }
  },
  updateModelValue() {
    var value = this.$('input').val();

    if (this.get('type') === 'currency') {
      if (parseFloat(value) || value === 0) {
        value = parseInt((parseFloat(value) * 100).toFixed());
      } // else return
    }

    this.get('model').set(`${this.get('attribute')}`, value);
  },

  actions: {
    addonClick() {
      if (this.get('onAddonClick')) {
        this.get('onAddonClick')();
      }

      this.$().find('input').first().focus();
    }
  }
});
