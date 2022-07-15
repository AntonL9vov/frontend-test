<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera">
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
      spisok_dlya_rendera() {
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
