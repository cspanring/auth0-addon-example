import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return ['This', 'is', 'a', 'public', 'list'];
  }
});
