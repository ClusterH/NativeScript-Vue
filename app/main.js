import Vue from 'nativescript-vue'
import App from './components/App'
import LoginPage from './components/LoginPage'
import * as platform from 'platform'

Vue.config.silent = (TNS_ENV === 'production')
var firebase = require("nativescript-plugin-firebase");
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function(instance) {
      console.log("firebase.init done");
    },
    function(error) {
      console.log("firebase.init error: " + error);
    }
  );

// if (platform.isIOS)
//   GMSServices.provideAPIKey("AIzaSyDtBwjHviTYJ-PlMh0kHY4CyiKoKc1wLao")

/* registering MapView element */
// Vue.registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView)

new Vue({
  render: h => h('frame', [h(LoginPage)]),
}).$start()