import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  name: DS.attr(),
  surname: DS.attr(),
  email: DS.attr(),
  age: DS.attr('number')
});
