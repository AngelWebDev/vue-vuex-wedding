<template>
  <div class="page-content bg-white">
    <div class="section-full content-inner-2 bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="settings-box m-b30 gray-input">
              <form v-on:submit.prevent="onSubmit">
                <div class="form-title"><h2 class="title-purple">Add Business</h2></div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label> Title * </label>
                      <input type="text" class="form-control" placeholder="Simply the best wedding of my life" name="title" v-model="title" required/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Contact Person </label>
                      <input type="text" class="form-control" placeholder="" name="username" v-model="username" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Website URL</label>
                      <input type="text" class="form-control" placeholder="" name="url" v-model="url" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Email address </label>
                      <input type="email" class="form-control" placeholder="Add an email" name="email" v-model="email" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Phone number</label>
                      <input type="text" class="form-control" placeholder="Add a phone number" name="phone" v-model="phone" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Enter postcode of full address </label>
                      <input type="text" class="form-control" placeholder="Add an address" name="address" v-model="address" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Second line of address</label>
                      <input type="text" class="form-control" placeholder="" name="state" v-model="state" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Postcode</label>
                      <input type="text" class="form-control" placeholder="" name="postcode" v-model="postcode" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>City</label>
                      <input type="text" class="form-control" placeholder="" name="city" v-model="city" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Country</label>
                      <input type="text" class="form-control" placeholder="" name="country" v-model="country" required/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Status</label>
                      <br/>
                      <el-select name="activeStatus" v-model="activeStatus" placeholder="Select Status">
                        <el-option
                          v-for="item in statusLists"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select>
                      <p class="text-danger" v-if="this.errors.activeStatus"> please input this field. </p>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label>Description*</label>
                      <textarea class="form-control" name="description" v-model="description" required>
                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="form-title"><h2>Your User Photo</h2></div>
                <div class="row">
                  <div class="col-lg-12 m-b30">
                    <input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" name="userPhoto" v-on:change="uploadFile($event)" multiple>
                  </div>
                </div>
                <div class="clear"></div>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="form-group">
                      <label>Categories</label>
                      <br/>
                      <el-select v-model="category" multiple placeholder="Select Category">
                        <el-option
                          v-for="(item, index) in categories"
                          :key="index"
                          :label="item.title"
                          :value="item.categoryId">
                        </el-option>
                      </el-select>
                      <p class="text-danger" v-if="this.errors.category"> please input this field. </p>
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="form-group">
                      <label> Regions Served </label>
                      <p> Please select the region(s) that are relevant to your business </p>
                      <ul class="select-list clearfix  p-l0 m-b30 row">
                        <li class="col-md-4" v-for="checkBoxList in checkBoxLists" :key="checkBoxList.id">
                          <div class="custom-control custom-checkbox checkbox-lg">
                            <input type="checkbox" class="custom-control-input" :id="checkBoxList.id" v-on:change="selectCheckBox(`${checkBoxList.id}`)">
                            <label class="custom-control-label" :for="checkBoxList.id">{{checkBoxList.name}}</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input class="btn green btn-block" type="submit" value="Save" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
import { Type } from '../store/mutation-type'
Vue.use(Element)
export default {
  name: 'AddBusinessComponent',
  data () {
    return {
      title: '',
      username: '',
      url: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      postcode: '',
      city: '',
      country: '',
      activeStatus: '',
      description: '',
      photos: [],
      category: [],
      regions: [],
      businessCatgId: 0,
      categoryId: '',
      statusLists: [
        {id: 1, name: 'Active'},
        {id: 2, name: 'Inactive'}
      ],
      checkBoxLists: [
        { id: 1, name: 'North East England', checked: false },
        { id: 2, name: 'North West England', checked: false },
        { id: 3, name: 'East Midlands', checked: false },
        { id: 4, name: 'South West England', checked: false },
        { id: 5, name: 'Yorkshire and the Humber', checked: false },
        { id: 6, name: 'East of England', checked: false },
        { id: 7, name: 'Scotland', checked: false },
        { id: 8, name: 'Ireland', checked: false },
        { id: 9, name: 'Wales', checked: false }
      ],
      categoryOptionLists: [],
      currentPageNum: 1,
      errors: {
        status: false,
        category: false
      }
    }
  },
  mounted () {
    this.getAllCategories()
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    getAllCategories () {
      this.$store.dispatch(Type.GET_ALL_CATEGORIES)
    },
    onSubmit: function () {
      if (!this.activeStatus || this.category.length === 0) {
        this.errors = {
          activeStatus: false,
          category: false
        }
        if (!this.activeStatus) {
          this.errors.activeStatus = true
        }
        if (this.category.length === 0) {
          this.errors.category = true
        }
        return
      }

      const newCategories = this.category.map(title => ({ businessId: 0, categoryId: this.categories.find(c => c.title === title).categoryId }))
      const status = this.statusLists.find(s => s.id === this.activeStatus).name
      let data = {
        'title': this.title,
        'businessType': 'VENDOR',
        'longDescription': this.description,
        'shortDescription': '',
        'username': this.username,
        'activeStatus': status,
        'address': {
          'address': this.address,
          'city': this.city,
          'country': this.country,
          'latitude': null,
          'locationId': 0,
          'longitude': '',
          'postalCode': this.postcode,
          'state': this.state
        },
        'bizCategories': newCategories
      }
      axios.post('https://business-service-wise-koala-lz.cfapps.io/business', data)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    },
    uploadFile: function (event) {
      Object.values(event.target.files).map(file => {
        this.photos.push(file.name)
      })
    },
    selectCheckBox: function (id) {
      this.checkBoxLists = this.checkBoxLists.map(item => {
        if (item.id === id * 1) {
          return {
            ...item,
            checked: !item.checked
          }
        }
        return item
      })
      console.log(this.checkBoxLists)
    }
  }
}
</script>
<style scoped>
textarea {
  height: 200px!important;
}
</style>
