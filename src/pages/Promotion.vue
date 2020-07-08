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
                  <div class="form-title"><h2 class="title-purple">Add Promotion</h2></div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label> Title * </label>
                        <input type="text" class="form-control" placeholder="Simply the best wedding of my life" name="title" v-model="formData.title" required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Description*</label>
                        <textarea class="form-control" name="description" v-model="formData.notes" required>
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">

                    <div class="col-lg-12 m-b30">
                      <label>Add a PhotoOptional</label>
                      <input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" name="imageData" v-on:change="uploadFile($event)" multiple>
                    </div>
                  </div>
                  <div class="row">
                    <div class='col-sm-6'>
                      <div class="form-group">
                        <label>Start Date:</label>
                        <datepicker name="fromDate" placeholder="Select Date" v-model="formData.fromDate" wrapper-class="form-group" input-class="form-control"></datepicker>
                      </div>
                    </div>
                    <div class='col-sm-6'>
                      <label>End Date: </label>
                      <datepicker name="toDate" placeholder="Select Date" v-model="formData.toDate" wrapper-class="form-group" input-class="form-control"></datepicker>
                    </div>
                  </div>
                  <br/>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Categories</label>
                        <br/>
                        <el-select name="category" v-model="category" multiple placeholder="Select Category">
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <p class="text-right">Off%</p>
                        <input type="number" class="form-control" name="offPercent" v-model="formData.offPercent" min="0" />
                      </div>
                      <div class="form-group">
                        <p class="text-right">Off Amount$</p>
                        <input type="number" class="form-control" name="offAmount" v-model="formData.offAmount" min="0" />
                      </div>
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
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <input class="btn green btn-block" name="save" type="submit" value="Save" v-if="!this.flags.isEditShow"/>
                      <input class="btn green btn-block" name="edit" type="submit" value="Update" v-if="this.flags.isEditShow"/>
                    </div>
                    <div class="col-lg-6">
                      <a class="btn red btn-block" name="delete"  v-on:click="onDelete" > Delete </a>
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
      <div class="container">
        <div class="form-title"><h2 class="title-purple">Current Promotions by Vendor</h2></div>
        <hr/>
          <div class="row">
            <div class="col-sm-12" v-if="this.flags.isImageData">
              <carousel :autoplay="true" :nav="false" :items="3">
                <div class="item" v-for="(image, index) in this.formData.images" :key="index">
                  <div class="shadow-effect">
                    <div class="listing-bx m-b20 expert-advice">
                      <div class="listing-media">
                        <img :src="image.imageUrl" alt="" @click="editOffer(image.id)">
                        <div class="media-info">
                          <a class="like-btn"><i class="fa fa-heart-o"></i></a>
                        </div>
                      </div>
                      <div class="listing-info">
                        <h3 class="title"><a>{{image.imageTitle}}</a></h3>
                        <a class="btn-link">{{image.imageType}}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </carousel>
            </div>
            <div class="col-sm-12" v-if="!this.flags.isImageData">
              <p> There is no data </p>
            </div>
          </div>
        </div>
    </section>
    <!-- Our Services -->
  </div>
</template>
<script>
import Vue from 'vue'
import Element from 'element-ui'
import datepicker from 'vuejs-datepicker'
import carousel from 'vue-owl-carousel'
import { Type } from '../store/mutation-type'
import Offer from '../services/Offer'
Vue.use(Element)
export default {
  components: {
    datepicker,
    carousel
  },
  data () {
    return {
      formData: {},
      photos: [],
      category: [],
      statusLists: [
        {id: 1, name: 'ACTIVE'},
        {id: 2, name: 'INACTIVE'}
      ],
      errors: {
        activeStatus: false,
        category: false
      },
      flags: {
        isImageData: false,
        isEditShow: false
      },
      dialogVisible: false,
      message: '',
      images: []
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.getPageData(this.$route.params.id)
      Offer().get(`/offers/business/${this.$route.params.id}`)
        .then(res => {
          if (res) {
            res.data.map(item => {
              const id = item.id
              this.images = item.images.map(image => ({
                ...image,
                id: id
              }))
            })
            this.flags.isImageData = true
          }
        })
        .catch(error => {
          this.flags.isImageData = false
          console.log(error)
        })
    } else {
      this.initData()
    }
    this.$store.dispatch(Type.GET_ALL_CATEGORIES)
  },
  computed: {
    categoryOptionLists () {
      return this.$store.state.categories
    }
  },
  methods: {
    getPageData: function (id) {
      Offer().get(`/offers/${id}`)
        .then(res => {
          if (res) {
            this.formData = res.data
            this.flags.isEditShow = true
            if (res.data.images.length > 0) this.flags.isImageData = true
          }
        })
        .catch(error => {
          if (error) {
            this.flags.isImageData = false
            this.dialogVisible = true
            this.message = 'Cannot Find That Offer. Please Input New Offer'
            setTimeout(() => {
              this.$router.push(`/offers`)
              this.initData()
            }, 3000)
          }
        })
    },

    onSubmit: function () {
      if (!this.formData.activeStatus || this.category.length === 0) {
        if (!this.formData.activeStatus) {
          this.errors.activeStatus = true
        }
        if (this.category.length === 0) {
          this.errors.category = true
        }
        return
      }

      if (this.formData.fromDate >= this.formData.toDate) {
        this.dialogVisible = true
        this.message = 'Start Date can not be greater than To Date.'
        return
      }
      let data = {
        'id': this.formData.id,
        'activeStatus': this.formData.activeStatus,
        'businessId': this.$store.state.storedId,
        'fromDate': this.formData.fromDate,
        'notes': this.formData.notes,
        'offAmount': this.formData.offAmount,
        'offPercent': this.formData.offPercent,
        'title': this.formData.title,
        'toDate': this.formData.toDate,
        'images': this.photos
      }
      if (!this.flags.isEditShow) {
        Offer().post('/offers', data)
          .then(res => {
            if (res) {
              this.dialogVisible = true
              this.message = 'Promotion was saved successfully.'
            }
            this.initData()
          })
          .catch(e => console.log(e))
      } else {
        Offer().put(`/offers/${this.formData.id}`, data)
          .then(res => {
            if (res) {
              this.dialogVisible = true
              this.message = 'Promotion was  Updated successfully.'
              this.getPageData(res.data)
            }
          })
          .catch(e => console.log(e))
      }
    },
    uploadFile: function (event) {
      Object.values(event.target.files).map(file => {
        this.photos.push(
          {
            'imageName': file.name,
            'imageTitle': file.name,
            'imageType': file.type,
            'imageUrl': '',
            'refId': '',
            'refType': 'image',
            'targetUrl': ''
          }
        )
      })
    },
    onDelete: function () {
      this.initData()
    },
    editOffer: function (id) {
      this.flags.isEditShow = true
      this.errors.activeStatus = false
      if (id) {
        Offer().get(`/offers/${id}`)
          .then(res => {
            if (res.data) this.setData(res.data)
            this.$store.state.storedId = res.data.businessId
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    initData: function () {
      this.formData = {
        'id': 0,
        'title': '',
        'notes': '',
        'fromDate': '',
        'toDate': '',
        'activeStatus': 'ACTIVE',
        'offPercent': 0,
        'offAmount': 0
      }
      this.category = []
      this.errors = {
        activeStatus: false,
        category: false
      }
      this.flags.isEditShow = false
    },
    setData: function (res) {
      this.formData = {
        'id': res.id,
        'title': res.title,
        'notes': res.notes,
        'fromDate': res.fromDate,
        'toDate': res.toDate,
        'activeStatus': res.activeStatus,
        'offPercent': res.offPercent,
        'offAmount': res.offAmount
      }
    }
  }
}
</script>
<style scoped>
textarea {
  height: 200px!important;
}

input[type=number] {
text-align: right;
padding-right: 10px;
width: 92%;
height: 40px;
}

.input-group {
  height: 40px;
}

.text-right {
  width: 92%;
  font-weight: 500;
  font-family: Poppins;
  font-size: 16px;
  margin-bottom: 10px;
}

.el-select {
  width: 92%;
}

.el-input--suffix .el-input__inner {
  width: 100%;
}

input {
  height: 40px;
}

.vdp-datepicker div input {
  height: 40px;
  width: 100%!important;
  padding: 15px 30px;
  font-size: 15px;
  margin-right: 15px;
  border-radius: 4px;
  color: #000;
}

.btn.red.btn-block {
  height: 40px;
  width: 92%;
  color: white;
}

.btn.green.btn-block {
  width: 92%;
}

.vdp-datepicker {
  width: 92%;
}

.listing-media img {
  width: 100%;
  height: auto;
}

.listing-media {
  margin: 10px;
  height: 30vh;
  overflow: hidden;
}
</style>
