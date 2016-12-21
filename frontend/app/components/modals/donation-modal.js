import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed('model.charity.@each', function() {
    return `Donate for ${this.get('model.charity.title')}`;
  }),
  actions: {
    sendDonation(model) {
      console.log('sendDonation called!');
      debugger;
      model.save().then((model) => {
        this.get('onSubmit')(model);
      }).catch((error) => {
        console.log('Error occured:\n', error);
        // create a flash message;
      }).finally(() => {
        console.log('Finally called');
        this.set('isLoading', false);
      });
    }
  }
});
