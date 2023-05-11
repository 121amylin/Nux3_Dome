export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("XX", {
    mounted(el, binding) {},
    getSSRProps() {
      // you can provide SSR-specific props here
      return {};
    },
  });
});
