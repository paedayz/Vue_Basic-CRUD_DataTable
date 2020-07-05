import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAwYqgjHbYMj5z0m5plyConh0UJU_-1K8I",
  authDomain: "ilog-work1.firebaseapp.com",
  databaseURL: "https://ilog-work1.firebaseio.com",
  projectId: "ilog-work1",
  storageBucket: "ilog-work1.appspot.com",
  messagingSenderId: "565560732638",
  appId: "1:565560732638:web:82f77b2e7979d0bb8b0b4f",
  measurementId: "G-LZ290H6Y5W",
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
