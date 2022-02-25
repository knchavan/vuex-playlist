<template>
  <div id="product-list-one">
      <h1>Product List One</h1>
      <ul>
          <li v-for="product in saleProducts" :key="product">
              <span> {{ product.name }} </span>
              <span> ${{ product.price }} </span>
          </li>
      </ul>
      <button v-on:click="reducePrice">Reduce Price</button>
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
    },
    methods: {
        reducePrice() {
            // this.$store.state.products.map(product => {
            //     product.price -= 1;
            // })
            this.$store.commit("reducePrice")
        }
    }
}
</script>

<style>
</style>
