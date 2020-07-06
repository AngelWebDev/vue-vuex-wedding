<template>
  <div class="container">
    <div class="form-group">
      <label class="label-title">Price Range</label>
      <div class="row">
        <div class="col-6">
          <input type="text" class="form-control" placeholder="Low Price" v-model="lowPrice" @change="setState('lowPrice')" />
        </div>
        <div class="col-6">
          <input type="text" class="form-control" placeholder="High Price" v-model="highPrice" @change="setState('highPrice')"/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="label-title">Rating</label>
      <div class="row">
        <el-select
          v-model="rating"
          placeholder="No Rating"
          class="el-select"
          @change="setState('rating')"
          >
          <el-option
            v-for="(item, index) in ratings"
            :key="index"
            :label="item"
            :value="index">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-6">
          <label class="label-title">Zone 1</label>
          <div class="row">
            <el-select
              v-model="zon1"
              placeholder="Zone1"
              class="el-select"
              @change="setState('countries')"
              >
              <el-option
                v-for="(item, index) in zone1"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="col-6">
          <label class="label-title">Country</label>
          <div class="row">
            <el-select
              :disabled="!zon1"
              v-model="country"
              placeholder="country"
              class="el-select"
              @change="setState('zone2')"
              >
              <el-option
                v-for="(item, index) in countries"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-6">
          <label class="label-title">Zone 2</label>
          <div class="row">
            <el-select
              :disabled="!country"
              v-model="zon2"
              placeholder="Zone2"
              class="el-select"
              @change="setState('states')"
              >
              <el-option
                v-for="(item, index) in zone2"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="col-6">
          <label class="label-title">State</label>
          <div class="row">
            <el-select
              :disabled="!zon2"
              v-model="state"
              placeholder="State"
              class="el-select"
              @change="setState('zone3')"
              >
              <el-option
                v-for="(item, index) in states"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-6">
          <label class="label-title">Zone 3</label>
          <div class="row">
            <el-select
              :disabled="!state"
              v-model="zon3"
              placeholder="Zone3"
              class="el-select"
              @change="setState('cities')"
              >
              <el-option
                v-for="(item, index) in zone3"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="col-6">
          <label class="label-title">City</label>
          <div class="row">
            <el-select
              :disabled="!zon3"
              v-model="city"
              placeholder="City"
              class="el-select"
              @change="setState('city')"
              >
              <el-option
                v-for="(item, index) in cities"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center m-t10">
      <button class="btn gray full-width" @click="submit">Apply filters ({{this.filtered.length}})</button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Type } from '../../store/mutation-type'
import Element from 'element-ui'
Vue.use(Element)
export default {
  name: 'FormComponent',
  data () {
    return {
      lowPrice: null,
      highPrice: null,
      rating: null,
      ratings: [
        'No Rating',
        '1 and Above',
        '2 and Above',
        '3 and Above',
        '4 and Above',
        '5'
      ],
      filtered: [],
      zon1: null,
      zon2: null,
      zone2: [],
      zon3: null,
      zone3: [],
      countries: [],
      country: null,
      state: null,
      states: [],
      cities: [],
      city: null
    }
  },
  computed: {
    zone1 () {
      return this.$store.state.zone1
    }
  },
  methods: {
    submit () {
      const params = [
        { key: 'city', value: this.city !== 'All City' ? this.city : null },
        { key: 'country', value: this.country },
        { key: 'state', value: this.state !== 'All State' ? this.state : null },
        { key: 'zone1', value: this.zon1 },
        { key: 'zone2', value: this.zon2 },
        { key: 'zone3', value: this.zon3 },
        { key: 'lowPrice', value: this.lowPrice },
        { key: 'highPrice', value: this.highPrice },
        { key: 'rating', value: this.rating }
      ]

      this.$store.dispatch(Type.GET_ALL_BUSINESS_BY_FILTER, params)
    },
    setState (key) {
      const places = this.$store.state.places
      switch (key) {
        case 'countries':
          let countries = places.reduce((arr, item) => {
            if (item.zone1 === this.zon1 && arr.indexOf(item.country) < 0) arr.push(item.country)
            return arr
          }, [])
          if (this.zone1 !== null && this.filtered.indexOf('zone1') < 0) this.filtered.push('zone1')
          this.countries = ['All Country', ...countries]
          break
        case 'zone2':
          let zone2 = places.reduce((arr, item) => {
            if (item.country === this.country && arr.indexOf(item.zone2) < 0) arr.push(item.zone2)
            return arr
          }, [])
          if (this.country !== null && this.filtered.indexOf('country') < 0) this.filtered.push('country')
          this.zone2 = zone2
          break
        case 'states':
          let states = places.reduce((arr, item) => {
            if (item.zone2 === this.zon2 && arr.indexOf(item.state) < 0) arr.push(item.state)
            return arr
          }, [])
          if (this.zone2 !== null && this.filtered.indexOf('zone2') < 0) this.filtered.push('zone2')
          this.states = ['All State', ...states]
          break
        case 'zone3':
          let zone3 = places.reduce((arr, item) => {
            if (item.state === this.state && arr.indexOf(item.zone3) < 0) arr.push(item.zone3)
            return arr
          }, [])
          if (this.state !== null && this.filtered.indexOf('state') < 0) this.filtered.push('state')
          this.zone3 = zone3
          break
        case 'cities':
          let cities = places.reduce((arr, item) => {
            if (item.zone3 === this.zon3 && arr.indexOf(item.city) < 0) arr.push(item.city)
            return arr
          }, [])
          if (this.zone3 !== null && this.filtered.indexOf('zone3') < 0) this.filtered.push('zone3')
          this.cities = ['All State', ...cities]
          break
        case 'city':
          if (this.city !== null && this.filtered.indexOf('city') < 0) this.filtered.push('city')
          break
        case 'rating':
          if (this.rating !== null && this.filtered.indexOf('rating') < 0) this.filtered.push('rating')
          break
        case 'lowPrice':
          if (this.lowPrice !== null && this.filtered.indexOf('lowPrice') < 0) this.filtered.push('lowPrice')
          break
        case 'highPrice':
          if (this.highPrice !== null && this.filtered.indexOf('highPrice') < 0) this.filtered.push('highPrice')
          break
        default: break
      }
    }
  }
}
</script>
