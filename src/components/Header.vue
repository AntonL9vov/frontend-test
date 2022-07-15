<script>
export default {
  name: 'Header',
  props: {
    cart: {
      required: true,
      type: Array,
      default: [],
    },
    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  watch: {
    cart(cart) {
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val.toFixed(2);
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>
