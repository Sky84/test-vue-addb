<template>
  <div class="card">
    <img :src="food.strMealThumb" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{food.strMeal}}</h5>
      <p class="card-text">Some food description.</p>
      <a href="#" class="btn btn-primary" v-on:click="addToCart()">ADD TO CART</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import RawFoodItem from './../types/RawFoodItem';
import { store } from './../store';

@Component
export default class AppProduct extends Vue {
  @Prop() private food!: RawFoodItem;
  private addToCart() {
    store.addToCart(this.food);
  }
}
</script>

<style lang="scss">
.card {
  width: 20rem;
  .card-title {
    text-overflow: ellipsis;
    white-space: pre;
    overflow: hidden;
  }
}
</style>