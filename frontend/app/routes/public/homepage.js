import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('this runs');
    return this.get('store').findAll('charity');
  },
  actions: {
    openDonateWindow(charity) {
      console.log('calls openDonateWindow action');
      return this.get('modals').open('donation-modal', this.get('store').createRecord('Donation', {
        charity: charity
      }));
    }
  }
});
