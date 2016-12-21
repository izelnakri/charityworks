import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNameBindings: [':cl-form'],
  isLoading: false,

  submit(event) {
    event.preventDefault();
    this.set('isLoading', true);

    window.model = this.get('model');
    // I can wrap this in promise for onSubmit, onSuccess, onError;
    this.get('model').save().then((model) => {
      this.get('onSubmit')(model);
    }).catch((error) => {
      console.log('Error occured:\n', error);
      // create a flash message;
    }).finally(() => {
      console.log('Finally called');
      this.set('isLoading', false);
    });

    return false;
  }
});
