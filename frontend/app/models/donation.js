import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  amount: attr('number'),
  message: attr('string'),
  donor: attr('string'),
  creditCardNo: attr('string'),
  charity: belongsTo()
});
