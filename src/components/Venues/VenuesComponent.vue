<template>
  <div class="section-full bg-gray wadding-vanues-search">
    <div class="clearfix">
      <div class="row m-lr0 column-reverse-md">
        <div class="col-xl-8 col-lg-12 sidebar-list p-lr0">
          <div class="search-results-topbar">
            <div class="search-results">
              <h6 class="search-content"><span class="text-primary">{{vendors.length}} of {{totalVendors}}  </span>Wedding Venues in the United Kingdom</h6>
              <a href="planner-shortlist.html" class="btn-link">Your Sortlist <span class="text-primary">(02)</span></a>
              <el-select placeholder="Select Option" class="el-select">
                <el-option
                  v-for="item in filterOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
              <a class="btn gray collapsed" onClick="vendor" role="button" data-toggle="collapse" href="#wadding-vanues-filter" aria-expanded="false" aria-controls="wadding-vanues-filter">Filter by</a>
            </div>
            <div class="filter-bx collapse fade" id="wadding-vanues-filter">
              <form-component />
            </div>
          </div>

          <div class="bg-gray wadding-vanues-list">
            <div class="row sp20">
              <venues-item-component
                v-for="item in vendors"
                :key="item.id"
                :data="item"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-12 p-lr0 map-bx">
          <div class="sticky-top">
            <div class="map-box">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14445.871196953145!2d75.8417313!3d25.153677599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1560937937217!5m2!1sen!2sin" style="border:0;" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Element from 'element-ui'
import FormComponent from './FormComponent'
import VenuesItemComponent from './VenuesItemComponent'
import { Type } from '../../store/mutation-type'
Vue.use(Element)
export default {
  name: 'VenuesComponent',
  components: {
    FormComponent,
    VenuesItemComponent
  },
  data () {
    return {
      filterOptions: [
        {id: 1, name: 'Our Favourites'},
        {id: 2, name: 'Most Popular'},
        {id: 3, name: 'Recently Added'}
      ],
      venues: []
    }
  },
  mounted () {
    this.getAllVendors()
  },
  computed: {
    vendors () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$store.state.vendors
    },
    totalVendors () {
      return this.$store.state.totalVendors
    }
  },
  methods: {
    getAllVendors () {
      this.$store.dispatch(Type.GET_ALL_VENDORS)
    }
  }
}
</script>
<style scoped>
  .el-select {
    width: 15%;
    margin-right: 10px;
  }
</style>
