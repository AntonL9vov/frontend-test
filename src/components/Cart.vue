<template>
  <div class="cart-list">
    <div v-for="item in listForRender">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
      listForRender() {
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
