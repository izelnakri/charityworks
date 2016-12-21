import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  keyForAttribute: function(attr) {
    return Ember.String.camelize(attr);
  },
  keyForRelationship: function(key, typeClass, method) {
    // console.log('key is:\n', key);
    // console.log('typeClasse is:\n', typeClass);
    // console.log('method is:\n', method);
    if (method === 'serialize') {
      return Ember.String.camelize(key).capitalize() + 'Id';
    }

    return Ember.String.camelize(key) + 'Id';
  }
});
