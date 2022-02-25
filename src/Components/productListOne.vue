<template>
  <div id="product-list-one">
      <h1>Product List One</h1>
      <ul>
          <li v-for="product in saleProducts" :key="product">
              <span> {{ product.name }} </span>
              <span> ${{ product.price }} </span>
          </li>
      </ul>
      <input type="text" v-model="amount">
      <button @click="reducePrice(amount)">Reduce Price</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            amount: 1,
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        // saleProducts() {
        //     return this.$store.getters.saleProducts;
        // },
        ...mapGetters([
            'saleProducts',
        ])
    },
    methods: {
        // reducePrice(amount) {
        //     this.$store.dispatch("reducePrice", amount)
        // },
        ...mapActions([
            'reducePrice',
        ])
    }
}
</script>

<style>
</style>
