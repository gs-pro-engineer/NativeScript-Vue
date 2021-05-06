/**
 * @Author: Mohammed Cherbatji <mo>
 * @Date:   2019-10-13T11:24:38+01:00
 * @Filename: main.js
 * @Last modified by:   mo
 * @Last modified time: 2019-10-16T17:42:20+01:00
 */


// require ("nativescript-local-notifications");
require ("nativescript-fonticon");

import Vue from 'nativescript-vue';
import App from './components/App';
import store from './store';
import NSVueShadow from 'nativescript-vue-shadow';
import Pager from 'nativescript-pager/vue';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import { ModalStack, overrideModalViewMethod, VueWindowedModal } from "nativescript-windowed-modal";
import RadRadialGauge from 'nativescript-ui-gauge/vue';
import { LocalNotifications } from "nativescript-local-notifications";

Vue.registerElement('YoutubePlayer', () => require('nativescript-youtubeplayer').YoutubePlayer)

// import FontIcon from 'nativescript-vue-fonticon'
import './app.scss'



Vue.use(Pager);
Vue.use(NSVueShadow);
Vue.use(RadRadialGauge);

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'ic': './assets/css/icons.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

overrideModalViewMethod();
Vue.registerElement("ModalStack", () => ModalStack);
Vue.use(VueWindowedModal);


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


LocalNotifications.requestPermission().then(granted => {console.log("Permission granted? " + granted);});

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
