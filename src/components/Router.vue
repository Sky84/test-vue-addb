
<template>
  <component class="p-5" v-bind:is="currentView">Router View</component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCart from './Cart.vue';
import AppProductList from './ProductList.vue';

const routes: any = {
  '/': AppProductList,
  '/cart': AppCart
};
@Component
export default class AppRouter extends Vue {
  private currentView = this.getViewComponent();
  private created() {
    this.$root.$on('navigate', () => {
      this.currentView = this.getViewComponent();
    });
  }

  private getViewComponent() {
    return routes[window.location.pathname] || AppProductList;
  }
}
</script>

<style lang="scss">
</style>