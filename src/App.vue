<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import productListOne from './Components/productListOne.vue'
import productListTwo from './Components/productListTwo.vue'
export default {
  name: 'app',
  components: {
    "product-list-one": productListOne,
    "product-list-two": productListTwo,
  },
  data () {
    return {
      products: [
        { name: "Mobile", price: 20 },
        { name: "Laptop", price: 50 },
        { name: "Charger", price: 80 },
        { name: "RAM", price: 60 },
        { name: "Desktop", price: 20 },
      ]
    }
  }
}
</script>

<style>

</style>
