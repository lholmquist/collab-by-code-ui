import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    previewSnapshot(snapshotImg) {
      //console.log(snapshotImg);
      this.$emit("changeComponent", snapshotImg);
    },
    photoFilter(frame, nextIdx) {
      this.$emit("photoFilter", frame, nextIdx);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");