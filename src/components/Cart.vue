<template>
  <div class="d-flex justify-content-center">
    <h1 v-if="totalAmount === 0">Your cart is empty</h1>
    <ul v-else class="items-cart list-group">
      <li class="list-group-item" v-for="item in cart.itemsInCart" :key="item.name">
        <div class="p-4">x{{item.amount}}</div>
        <img :src="item.thumb" width="100" />
        <div class="p-4">{{item.name}}</div>
        <button
          type="button"
          class="btn btn-primary ml-auto"
          v-on:click="removeFromCart(item.id)"
        >REMOVE</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FoodItem from '../types/FoodItem';
@Component
export default class AppCart extends Vue {
  get totalAmount() {
    return this.cart.totalAmount;
  }
  get cart() {
    return this.$root.$data.store.state.cart;
  }

  private removeFromCart(id: string) {
    this.$root.$data.store.removeFromCart(id);
  }
}
</script>

<style lang="scss">
.items-cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list-group-item {
    display: flex;
    width: 70%;
    align-items: center;
  }
}
</style>