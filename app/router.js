import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('sign-up');
  this.route('applications', function() {
    this.route('new');
  });
  this.route('terms-and-condition');
  this.route('privacy-policy');
});

export default Router;
