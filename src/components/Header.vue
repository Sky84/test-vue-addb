<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <app-router-link class="navbar-brand" to="/" label="A Shop"></app-router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex justify-content-between w-100">
        <app-router-link class="nav-item nav-link" to="/" label="Products"></app-router-link>
        <app-router-link class="nav-item nav-link" to="/cart" :label="'Cart '+totalAmount"></app-router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppRouterLink from './RouterLink.vue';

@Component({
  components: {
    AppRouterLink
  }
})
export default class AppHeader extends Vue {
  get totalAmount() {
    return '(' + this.$root.$data.store.state.cart.totalAmount + ')';
  }
}
</script>

<style lang="scss">
</style>