import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('protected');
  this.route('unprotected');
  this.route('logout');
  this.route('profile');
});

export default Router;
