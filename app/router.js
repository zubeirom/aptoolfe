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
    this.route('info', {path: ':application_id'},function() {
      this.route('edit');

      this.route('event', function() {
        this.route('info', {path: ':event_id'}, function() {
          this.route('edit');
        });
        this.route('new');
      });
    });
  });
  this.route('terms-and-condition');
  this.route('privacy-policy');
  this.route('my-account');
  this.route('jobs');
  this.route('about');
  this.route('.well-known', function() {
    this.route('assetlink.json');
    this.route('assetlinks.json');
  });
});

export default Router;
