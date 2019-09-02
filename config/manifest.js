'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'Aptool',
    short_name: 'Aptool',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#38EF7D',
    theme_color: '#38EF7D',
    icons: [
      {
        src: 'https://imgur.com/ePygU0c.png',
        sizes: '540x540',
        type: 'image/png'

      }
    ],
    ms: {
      tileColor: '#ffffff'
    }
  };
}
