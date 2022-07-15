<template>
  <div class="cart-list">
    <div v-for="item in ListForRender">
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
      ListForRender() {//Названия функций лучше делать понятными и на английском языке, так же стоит придерживаться
                      //единого стиля. Либо camelCase, либо snake-case. Принято названия функций писать в camelCase
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
