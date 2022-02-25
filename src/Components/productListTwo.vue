<template>
  <div id="product-list-two">
      <h1>Product List Two</h1>
      <ul>
          <li v-for="product in saleProducts" :key="product">
              <span> {{ product.name }} </span>
              <span> ${{ product.price }} </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    }
}
</script>

<style>
</style>
