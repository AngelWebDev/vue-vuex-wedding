import Vue from 'vue'
import Vuex from 'vuex'
import Services from '../services/Services'
import { Type } from './mutation-type'

Vue.use(Vuex)
export default new Vuex.Store(
  {
    state: {
      categories: [],
      vendors: [],
      totalVendors: 0
    },
    mutations: {
      [Type.GET_ALL_CATEGORIES] (state, payload) {
        state.categories = payload
      },
      [Type.GET_ALL_VENDORS] (state, payload) {
        state.vendors = payload
      },
      [Type.GET_TOTAL_VENDORS] (state, payload) {
        state.totalVendors = payload
      }
    },
    actions: {
      async [Type.GET_ALL_CATEGORIES] (context) {
        const res = await Services.getAllCategories()
        context.commit(Type.GET_ALL_CATEGORIES, res)
      },
      async [Type.GET_ALL_VENDORS] (context) {
        const res = await Services.getAllVendors()
        let temp = []
        let i = 0
        res.map(item => {
          if (item.images.length > 0) {
            i++
            temp.push({
              id: i,
              src: item.images[0].imageUrl,
              specialMessage1: item.specialMessage1,
              specialMessage2: item.specialMessage2,
              featureType1: item.featureType1,
              featureValue1: item.featureValue1,
              priceRange: item.priceRange,
              activeStatus: item.activeStatus,
              address: item.address,
              bizCategories: item.bizCategories,
              rating: item.rating,
              title: item.title
            })
          }
        })
        context.commit(Type.GET_TOTAL_VENDORS, temp.length)
        context.commit(Type.GET_ALL_VENDORS, temp)
      }
    }
  }
)
