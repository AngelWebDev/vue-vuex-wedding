import Vue from 'vue'
import Vuex from 'vuex'
import Services from '../services/Services'
import { Type } from './mutation-type'

Vue.use(Vuex)
export default new Vuex.Store(
  {
    state: {
      allInqueries: [],
      businessDetail: {},
      categories: [],
      countries: [],
      places: [],
      totalVendors: 0,
      vendors: [],
      zone1: [],
      storedBusinessId: ''
    },
    mutations: {
      [Type.GET_ALL_CATEGORIES] (state, payload) {
        state.categories = payload
      },
      [Type.GET_ALL_INQUERIES] (state, payload) {
        state.allInqueries = payload
      },
      [Type.GET_ALL_VENDORS] (state, payload) {
        state.vendors = payload
      },
      [Type.GET_ALL_PLACES] (state, payload) {
        state.places = payload
      },
      [Type.GET_TOTAL_VENDORS] (state, payload) {
        state.totalVendors = payload
      },
      [Type.GET_BUSINESS] (state, payload) {
        state.businessDetail = payload
      },
      [Type.SET_COUNTRIES] (state, payload) {
        state.countries = payload
      },
      [Type.SET_ZONE1] (state, payload) {
        state.zone1 = payload
      },
      [Type.SAVE_BUSINESS_FOR_OFFER] (state, payload) {
        state.storedBusinessId = payload
      }
    },
    actions: {
      async [Type.GET_ALL_CATEGORIES] (context) {
        const res = await Services.getAllCategories()
        context.commit(Type.GET_ALL_CATEGORIES, res)
      },
      async [Type.GET_ALL_INQUERIES] (context, id) {
        const res = await Services.getAllInqueries(id)
        context.commit(Type.GET_ALL_INQUERIES, res)
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
              title: item.title,
              businessId: item.businessId,
              bysinessType: item.businessType
            })
          }
        })
        context.commit(Type.GET_TOTAL_VENDORS, temp.length)
        context.commit(Type.GET_ALL_VENDORS, temp)
      },
      async [Type.GET_ALL_PLACES] (context) {
        const res = await Services.getAllPlaces()
        let countries = res.reduce((arr, item) => {
          if (arr.indexOf(item.country) < 0) arr.push(item.country)
          return arr
        }, [])
        let zone1 = res.reduce((arr, item) => {
          if (arr.indexOf(item.zone1) < 0) arr.push(item.zone1)
          return arr
        }, [])

        context.commit(Type.GET_ALL_PLACES, res)
        context.commit(Type.SET_COUNTRIES, countries)
        context.commit(Type.SET_ZONE1, zone1)
      },
      async [Type.GET_ALL_BUSINESS_BY_FILTER] (context, payload) {
        var params = ''
        await payload.forEach(item => {
          if (item.value !== null) params += `${item.key}=${item.value}&`
        })
        const res = await Services.filteredBusiness(params)
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
              title: item.title,
              businessId: item.businessId,
              bysinessType: item.businessType
            })
          }
        })
        context.commit(Type.GET_TOTAL_VENDORS, temp.length)
        context.commit(Type.GET_ALL_VENDORS, temp)
      },
      async [Type.GET_BUSINESS] (context, id) {
        const res = await Services.getBusiness(id)
        context.commit(Type.GET_BUSINESS, res)
      }
    }
  }
)
