/**
 * @Author: Mohammed Cherbatji <mo>
 * @Date:   2019-05-06T16:44:29+01:00
 * @Filename: index.js
 * @Last modified by:   mo
 * @Last modified time: 2019-10-16T18:56:38+01:00
 */



import Vue from 'nativescript-vue';
import Vuex from 'vuex';
// import localStorage from 'nativescript-localstorage';
const appSettings = require("tns-core-modules/application-settings");

import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

// const application = require("tns-core-modules/application");


Vue.use(Vuex);

const debug = TNS_ENV !== 'production';
// const debug = process.env.NODE_ENV !== 'production'



const NSVuexPersistent = store => {

  // localStorage.setItem('ns-vuex-persistent', "");
  // appSettings.setString('ns-vuex-persistent', "");

 // Init hook.

 // let storageStr = localStorage.getItem('ns-vuex-persistent');

//
 let storageStr = appSettings.getString('ns-vuex-persistent');

 if (storageStr) {
  store.replaceState(JSON.parse(storageStr))
 }
 store.subscribe((mutation, state) => {
  // Suscribe hook.
  // localStorage.setItem('ns-vuex-persistent', JSON.stringify(state));
  appSettings.setString('ns-vuex-persistent', JSON.stringify(state));
 })
};


// application.on(application.resumeEvent, (args) => {
//     if (args.android) {
//         // For Android applications, args.android is an android activity class.
//         console.log("Activity: " + args.android);
//     } else if (args.ios) {
//         // For iOS applications, args.ios is UIApplication.
//         console.log("UIApplication: " + args.ios);
//     }
//
//
//     const NSVuexPersistent = store => {
//
//       // localStorage.setItem('ns-vuex-persistent', "");
//       appSettings.setString('ns-vuex-persistent', "");
//
//      // Init hook.
//
//      // let storageStr = localStorage.getItem('ns-vuex-persistent');
//
//     //
//      let storageStr = appSettings.getString('ns-vuex-persistent');
//
//      if (storageStr) {
//       store.replaceState(JSON.parse(storageStr))
//      }
//      store.subscribe((mutation, state) => {
//       // Suscribe hook.
//       // localStorage.setItem('ns-vuex-persistent', JSON.stringify(state));
//       appSettings.setString('ns-vuex-persistent', JSON.stringify(state));
//      })
//     };
// });


const store = new Vuex.Store({
  state: {
    statesList: [
      {
        id: 1,
        name: "State of Clarity",
        nameSize: 40,
        sub: "Creates insight, communication, accuracy",
        title: "State of Clarity creates insight, communication, accuracy",
        text: "Please type a question that you will answer each day in relation to a goal you set for the State of Insight. For example: Did I provide clarity for my team?",
        color: 'blue',
        img: 'i',
        edited: false,
        count: 0,
        dateIncremented: 0,
        completed: false
      },
      {
        id: 2,
        name: "State of Connection",
        nameSize: 40,
        sub: "Creates empathy, relationships, teamwork",
        title: "State of Connection creates empathy, relationships, teamwork",
        text: "Please type a question that you will answer each day in relation to a goal you set for the State of Connection.",
        color: 'teale',
        img: 'c',
        edited: false,
        count: 0,
        dateIncremented: 0,
        completed: false
      },
      {
        id: 3,
        name: "State of Certainty",
        nameSize: 40,
        sub: "Creates belief, confidence, tenacity",
        title: "State of Certainty Creates belief, confidence, tenacity",
        text: "Please type a question that you will answer each day in relation to a goal you set for the State of Certainty.",
        color: 'green',
        img: 'ce',
        edited: false,
        count: 0,
        dateIncremented: 0,
        completed: false
      },
      {
        id: 4,
        name: "State of Vitality",
        nameSize: 40,
        sub: "Creates action, wellness, results",
        title: "State of Vitality creates action, wellness, results",
        text: "Please type a question that you will answer each day in relation to a goal you set for the State of Vitality.",
        color: 'red',
        img: 'v',
        edited: false,
        count: 0,
        dateIncremented: 0,
        completed: false
      },
      {
        id: 5,
        name: "State of Spirit",
        nameSize: 40,
        sub: "Creates purpose, leadership, possibility",
        title: "State of Spirit creates purpose, leadership, possibility",
        text: "Please type a question that you will answer each day in relation to a goal you set for the State of Spirit.",
        color: 'purple',
        img: 's',
        edited: false,
        count: 0,
        dateIncremented: 0,
        completed: false
      }
    ],
    notificationScheduled: false,
    notificationTime: new Date()
  },
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: [NSVuexPersistent]
});

Vue.prototype.$store = store;

export default store;
