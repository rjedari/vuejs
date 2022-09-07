/* eslint-disable */
import Vue from "vue";

function eventHub(vue: typeof Vue): void {
  const eventHub = new Vue();
  Object.defineProperties(eventHub, {
    on: {
      get: function () {
        return eventHub.$on;
      },
    },
    once: {
      get: function () {
        return eventHub.$once;
      },
    },
    emit: {
      get: function () {
        return eventHub.$emit;
      },
    },
    off: {
      get: function () {
        return eventHub.$off;
      },
    },
  });
  Object.defineProperty(Vue.prototype, "$eventHub", {
    get: function () {
      return eventHub;
    },
  });
}

Vue.use(eventHub);
