import axios from 'axios'

const state = {
    cocktailLists: [],
    cart:[]
}
const getters = {
    allCocktails : state => state.cocktailLists,
    allItems : state => state.cart
}
const actions = {
    async fetchCocktail({commit}){
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
        commit('getCocktail', res.data.drinks)
        console.log(res.data.drinks)
    },
    addProductToCart({commit}, {product, quantity}){
        commit('ADD_TO_CART', {product,quantity})    
    }
}

const mutations = {
    getCocktail : (state, cocktailLists) => state.cocktailLists = cocktailLists,
    ADD_TO_CART : (state, {product,quantity}) => {
        state.cart.push({
            product,
            quantity
        })
    }
}

export default {
    state,getters,actions,mutations
}