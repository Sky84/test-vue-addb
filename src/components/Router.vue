
<template>
  <component class="p-5" v-bind:is="ViewComponent">Router View</component>
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
  private currentRoute = window.location.pathname;

  get ViewComponent() {
    return routes[this.currentRoute] || AppProductList;
  }
}
</script>

<style lang="scss">
</style>