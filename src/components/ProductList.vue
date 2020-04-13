<template>
  <div>
    <h1>Our products</h1>
    <div class="d-flex flex-wrap justify-content-around">
      <app-product v-for="product in products" :key="product.strMeal" :food="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AppProduct from './Product.vue';
import axios, { AxiosResponse } from 'axios';
import RawFoodItem from '../types/RawFoodItem';

@Component({
  components: {
    AppProduct
  }
})
export default class AppProductList extends Vue {
  private products: RawFoodItem[] = [];
  private created() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((response: AxiosResponse) => {
        this.products = response.data.meals;
      });
  }
}
</script>

<style lang="scss">
</style>