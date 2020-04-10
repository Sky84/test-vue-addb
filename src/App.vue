<template>
  <div id="app">
    <app-header />
    <app-router />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator';
import AppHeader from './components/Header.vue';
import AppRouter from './components/Router.vue';
import AppProductList from './components/ProductList.vue';
import AppProduct from './components/Product.vue';
import AppCart from './components/Cart.vue';

@Component({
  components: { AppHeader, AppRouter, AppProductList, AppCart, AppProduct }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/bootstrap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
