import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            { name: "Mobile", price: 20 },
            { name: "Laptop", price: 50 },
            { name: "Charger", price: 80 },
            { name: "RAM", price: 60 },
            { name: "Desktop", price: 20 },
          ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map( product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            })
            return saleProducts
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.map(product => {
                product.price -= 1;
            })
        }
    }
})