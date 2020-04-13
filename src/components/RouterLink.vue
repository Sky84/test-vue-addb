<template>
  <a @click="navigate" :href="to">{{label}}</a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RouterLink extends Vue {
  @Prop(String) private to!: string;
  @Prop(String) private label!: string;

  private navigate(evt: any) {
    evt.preventDefault();
    window.history.pushState(null, '', this.to);
    this.$root.$emit('navigate');
  }
}
</script>

<style lang="scss">
</style>