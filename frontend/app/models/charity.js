import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  title: attr(),
  logoURL: attr(),
  description: attr(),
  foundedAt: attr('date'),
  employeeCount: attr('number'),
  areasServed: attr(),
  endowment: attr('number')
  
  // categories: hasMany()
});
