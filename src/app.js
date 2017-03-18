// This component is what wraps all the other pages
// This is the blog app, that is it's main intent is to render the content for visitor.
// It's not necessarily for the admin or editors and those parts may be separated into their own apps later.

import config from './config.json'

export default {
  template: require('./app.html'),
  data() {
    return config
  },
}
