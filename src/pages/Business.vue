<template>
  <div class="page-wraper">
    <div class="page-content bg-white">
      <!-- contact area -->
      <div class="section-full content-inner-2 bg-gray">
        <div class="container">
          <el-dialog
            title="Message"
            :visible.sync="dialogVisible"
            width="50%">
            <p v-html="message" />
          </el-dialog>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="settings-box m-b30 gray-input">
                <form v-on:submit.prevent="onSubmit">
                  <div class="form-title" v-if="this.isShowEditButton && !this.$route.params.id"><h2 class="title-purple">Add Business</h2></div>
                  <div class="form-title" v-else><h2 class="title-purple">Edit Business</h2></div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label> Title * </label>
                        <input type="text" class="form-control" placeholder="Simply the best wedding of my life" name="title" v-model="formData.title" required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Contact Person </label>
                        <input type="text" class="form-control" placeholder="" name="username" v-model="formData.username" required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Website URL</label>
                        <input type="text" class="form-control" placeholder="" name="url" v-model="formData.webUrl" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Email address </label>
                        <input type="email" class="form-control" placeholder="Add an email" name="email" v-model="formData.email"/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Phone number</label>
                        <input type="text" class="form-control" placeholder="Add a phone number" name="phone" v-model="formData.phone1"/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Enter postalCode of full address </label>
                        <input type="text" class="form-control" placeholder="Add an address" name="address" v-model="formData.address"/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Second line of address</label>
                        <input type="text" class="form-control" placeholder="" name="state" v-model="formData.state" required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>postalCode</label>
                        <input type="text" class="form-control" placeholder="" name="postalCode" v-model="formData.postalCode" required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" placeholder="" name="city" v-model="formData.city" required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Country</label>
                        <input type="text" class="form-control" placeholder="" name="country" v-model="formData.country" required/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="form-group">
                        <label>Status</label>
                        <br/>
                        <el-select name="activeStatus" v-model="formData.activeStatus" placeholder="Select Status">
                          <el-option
                            v-for="item in statusLists"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name">
                          </el-option>
                        </el-select>
                        <p class="text-danger" v-if="this.errors.activeStatus"> please input this field. </p>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Description*</label>
                        <textarea class="form-control" name="description" v-model="formData.longDescription" required>
                        </textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Brief Description*</label>
                        <textarea class="form-control" name="shortDescription" v-model="formData.shortDescription" required>
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-title"><h2>Your User Photo</h2></div>
                  <div class="row">
                    <div class="col-lg-12 m-b30">
                      <input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" name="imageData" v-on:change="uploadFile($event)" multiple>
                    </div>
                  </div>
                  <div class="clear"></div>
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <div class="form-group">
                        <label>Categories</label>
                        <br/>
                        <el-select v-model="formData.bizCategories" multiple placeholder="Select Category">
                          <el-option
                            v-for="(item, index) in categoryOptionLists"
                            :key="index"
                            :label="item.title"
                            :value="item.categoryId">
                          </el-option>
                        </el-select>
                        <p class="text-danger" v-if="this.errors.category"> please input this field. </p>
                      </div>
                    </div>
                    <!-- <div class="col-lg-8 col-md-8 col-sm-8">
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
                    </div> -->
                  </div>
                  <div class="row">
                    <div class="col-lg-6" v-if="!this.$route.params.id">
                      <div class="form-group">
                        <input class="btn green btn-block" type="submit" value="Save" />
                      </div>
                    </div>
                    <div class="col-lg-6" v-if="this.$route.params.id" @click="changeButton">
                      <div class="form-group">
                        <input class="btn green btn-block" type="submit" value="Update Business" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <button class="btn blue btn-block" @click="addPromotion"> Add Promotions </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- contact area end -->
    </div>
    <!-- Our Services -->
    <section class="section-full bg-white content-inner about-us">
      <image-item-component :businessId="$route.params.id" />
    </section>
    <!-- Our Services -->
    <!-- contact area -->
    <section id="tabs" class="project-tab">
      <business-table-component :id="this.$route.params.id" />
    </section>
    <!-- contact area end -->
  </div>
</template>
<script>
import Vue from 'vue'
import Element from 'element-ui'
import { Type } from '../store/mutation-type'
import Api from '../services/Api'
import ImageItemComponent from '../components/public/ImageItemComponent'
import BusinessTableComponent from '../components/business/BusinessTableComponent'
Vue.use(Element)
export default {
  name: 'Business',
  components: {
    ImageItemComponent,
    BusinessTableComponent
  },
  data () {
    return {
      formData: {},
      statusLists: [
        { id: 1, name: 'ACTIVE' },
        { id: 2, name: 'INACTIVE' }
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
      errors: {
        status: false,
        category: false,
        imageData: false
      },
      dialogVisible: false,
      message: '',
      isShowEditButton: true,
      businessId: 0
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.getPageData(this.$route.params.id)
    } else {
      this.initFormData()
    }
    this.$store.dispatch(Type.GET_ALL_CATEGORIES)
  },
  computed: {
    categoryOptionLists () {
      return this.$store.state.categories
    }
  },
  methods: {
    initFormData: function () {
      this.formData = {
        'businessId': 0,
        'businessType': '',
        'webUrl': '',
        'username': '',
        'email': '',
        'phone1': '',
        'title': '',
        'shortDescription': '',
        'longDescription': '',
        'activeStatus': '',
        'locationId': 0,
        'locationType': '',
        'address': '',
        'city': '',
        'state': '',
        'country': '',
        'postalCode': '',
        'latitude': '',
        'longitude': '',
        'bizCategories': [],
        'images': []
      }
    },
    getPageData: function (id) {
      Api().get(`/business/${id}`)
        .then(res => {
          if (res) {
            this.formData = {
              'businessId': res.data.businessId,
              'businessType': res.data.businessType,
              'webUrl': res.data.webUrl,
              'email': res.data.email,
              'phone1': res.data.phone1,
              'username': res.data.username,
              'title': res.data.title,
              'shortDescription': res.data.shortDescription,
              'longDescription': res.data.longDescription,
              'activeStatus': res.data.activeStatus,
              'locationId': res.data.address.locationId,
              'locationType': res.data.address.locationType,
              'address': res.data.address.address,
              'city': res.data.address.city,
              'state': res.data.address.state,
              'country': res.data.address.country,
              'postalCode': res.data.address.postalCode,
              'latitude': res.data.address.latitude,
              'longitude': res.data.address.longitude,
              'bizCategories': res.data.bizCategories.map(item => item.categoryId),
              'images': res.data.images
            }
          }
        })
        .catch(error => {
          if (error) {
            this.errors.isImageData = false
            this.dialogVisible = true
            this.message = 'Cannot Find That Business. Please Input New Business'
            setTimeout(() => {
              this.$router.push(`/business`)
            }, 3000)
          }
        })
    },
    changeButton () {
      if (this.$route.params.id) {
        this.isShowEditButton = !this.isShowEditButton
        if (this.isShowEditButton) this.onSubmit()
      }
    },
    onSubmit: function () {
      if (!this.formData.activeStatus || this.formData.bizCategories.length === 0) {
        this.errors = {
          activeStatus: false,
          category: false
        }
        if (!this.formData.activeStatus) {
          this.errors.activeStatus = true
        }
        if (this.formData.bizCategories.length === 0) {
          this.errors.category = true
        }
        return
      }
      const bizCategories = this.formData.bizCategories.map(title => {
        return { businessId: title.businessId, categoryId: this.categoryOptionLists.find(c => c.title === title).categoryId }
      })
      let data = {
        'title': this.formData.title,
        'businessType': 'VENDOR',
        'webUrl': this.formData.webUrl,
        'email': this.formData.email,
        'phone1': this.formData.phone1,
        'longDescription': this.formData.longDescription,
        'shortDescription': this.formData.shortDescription,
        'username': this.formData.username,
        'activeStatus': this.formData.activeStatus,
        'address': {
          'address': this.formData.address,
          'city': this.formData.city,
          'country': this.formData.country,
          'latitude': null,
          'locationId': 0,
          'longitude': '',
          'postalCode': this.formData.postalcode,
          'state': this.formData.state
        },
        'bizCategories': bizCategories
      }
      if (this.isShowEditButton && !this.$route.params.id) {
        Api().post('/business', data)
          .then(res => {
            if (res) {
              this.dialogVisible = true
              this.message = 'Business saved successfully.'
              this.getPageData(res.data)
              this.isShowEditButton = true
            }
          })
          .catch(e => {
            if (e) {
              this.dialogVisible = true
              this.message = e.message || 'Title already exist.'
            }
          })
      } else {
        Api().put(`/business/${this.$route.params.id}`, data)
          .then(res => {
            if (res) {
              this.dialogVisible = true
              this.message = 'Business edited successfully.'
              this.isShowEditButton = true
            }
          })
          .catch(e => {
            if (e) {
              this.dialogVisible = true
              this.message = 'Title already exist.'
            }
          })
      }
    },
    addPromotion: function () {
      this.$router.push('/offers')
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
    }
  }
}
</script>
<style scoped>
textarea {
  height: 200px!important;
}
.listing-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.listing-media {
  margin: 10px;
  height: 30vh;
  overflow: hidden;
}
</style>
