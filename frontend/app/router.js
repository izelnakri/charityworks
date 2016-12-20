import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('public', function() {
    this.route('homepage', { path: '/' });

    this.route('contact');

    this.route('register');
    this.route('login');

    this.route('profile', { path: '/users/:username' });
  });

  this.route('admin', function() {
    this.route('index', { path: '/' });
  });
});

export default Router;
