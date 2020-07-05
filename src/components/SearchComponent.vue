<template>
  <div class="search-filter wadding-vanues-filter">
    <div class="container">
      <div class="filter-form">
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-6 col-6">
                <el-select
                v-model="category"
                placeholder="Select Category"
                class="el-select"
                >
                  <el-option
                    v-for="(item, index) in categories"
                    :key="index"
                    :label="item.title"
                    :value="item.categoryId">
                  </el-option>
                </el-select>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-6 col-6">
                <el-select
                v-model="country"
                placeholder="Select Country"
                class="el-select"
                @change="setStates"
                >
                  <el-option
                    v-for="(item, index) in countries"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-6 col-6">
                <el-select
                  :disabled="!country"
                  v-model="state"
                  placeholder="Select State"
                  class="el-select"
                  @change="setCities"
                  >
                  <el-option
                    v-for="(item, index) in states"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-6 col-6">
                <el-select
                  :disabled="!state"
                  v-model="city"
                  placeholder="Select City"
                  class="el-select"
                  >
                  <el-option
                    v-for="(item, index) in cities"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-6 col-6">
                <input type="text" class="form-control" placeholder="Search keywork.." v-model="search"/>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-6 col-6">
                <el-select v-model="sort" placeholder="Select Sort" class="el-select">
                  <el-option
                    v-for="(item, index) in sorts"
                    :key="index"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
                <button class="btn btn-block gradient text-uppercase" @click="submit"> Search</button>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
                <button class="btn btn-block gradient text-uppercase" @click="reset"> Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Type } from '../store/mutation-type'
import Element from 'element-ui'
Vue.use(Element)
export default {
  name: 'SearchComponent',
  data () {
    return {
      category: null,
      cities: [],
      city: null,
      country: null,
      search: null,
      sort: null,
      sorts: [
        {id: 1, value: 'None'},
        {id: 2, value: 'Price: Low to High'},
        {id: 3, value: 'Price: High to Low'},
        {id: 4, value: 'Rating'}
      ],
      state: null,
      states: []
    }
  },
  mounted () {
    this.initData()
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    countries () {
      return this.$store.state.countries
    }
  },
  methods: {
    initData () {
      this.$store.dispatch(Type.GET_ALL_CATEGORIES)
      this.$store.dispatch(Type.GET_ALL_PLACES)
    },
    setStates () {
      const places = this.$store.state.places
      let temp = []
      if (places.length > 0) {
        places.forEach(item => {
          if (item.country === this.country && temp.indexOf(item.state) < 0) temp.push(item.state)
        })
      }
      this.states = temp
    },
    setCities () {
      const places = this.$store.state.places
      let temp = []
      if (places.length > 0) {
        places.forEach(item => {
          if (item.state === this.state && temp.indexOf(item.city) < 0) temp.push(item.city)
        })
      }
      this.cities = temp
    },
    submit () {
      const params = [
        { key: 'categoryId', value: this.category },
        { key: 'city', value: this.city },
        { key: 'country', value: this.country },
        { key: 'searchText', value: this.search },
        { key: 'state', value: this.state },
        { key: 'sortBy', value: this.sort }
      ]

      this.$store.dispatch(Type.GET_ALL_BUSINESS_BY_FILTER, params)
    },
    reset () {
      this.category = null
      this.city = null
      this.country = null
      this.search = null
      this.sort = null
      this.state = null
      this.$store.dispatch(Type.GET_ALL_VENDORS)
    }
  }
}
</script>
<style scoped>
  .btn {
    padding: 10px 10px !important;
  }
  .form-control {
    height: 40px !important;
  }
</style>
