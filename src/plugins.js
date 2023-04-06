export default {
  install(Vue) {
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    });
  },
};
