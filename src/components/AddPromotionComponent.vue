<template>
  <div class="page-wraper">
    <div class="page-content bg-white">
      <div class="section-full content-inner-2 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="settings-box m-b30 gray-input">
                <form v-on:submit.prevent="onSubmit">
                  <div class="form-title"><h2 class="title-purple">Add Promotion</h2></div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label> Title * </label>
                        <input type="text" class="form-control" placeholder="Simply the best wedding of my life" name="title" v-model="title" required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Description*</label>
                        <textarea class="form-control" name="description" v-model="description" required>
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">

                    <div class="col-lg-12 m-b30">
                      <label>Add a PhotoOptional</label>
                      <input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" name="userPhoto" v-on:change="uploadFile($event)" multiple>
                    </div>
                  </div>
                  <div class="row">
                    <div class='col-sm-6'>
                      <div class="form-group">
                        <label>Start Date:</label>
                        <datepicker name="fromDate" placeholder="Select Date" v-model="fromDate" wrapper-class="form-group" input-class="form-control"></datepicker>
                      </div>
                    </div>
                    <div class='col-sm-6'>
                      <label>End Date: </label>
                      <datepicker name="toDate" placeholder="Select Date" v-model="toDate" wrapper-class="form-group" input-class="form-control"></datepicker>
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
                            v-for="(item, index) in categories"
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
                        <input type="number" class="form-control" name="offPercent" v-model="offPercent" min="0" />
                      </div>
                      <div class="form-group">
                        <p class="text-right">Off Amount$</p>
                        <input type="number" class="form-control" name="offAmount" v-model="offAmount" min="0" />
                      </div>
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
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <input class="btn green btn-block" name="save" type="submit" value="Save" />
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
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import Element from 'element-ui'
import datepicker from 'vuejs-datepicker'
import { Type } from '../store/mutation-type'
Vue.use(Element)
export default {
  name: 'AddPromotionComponent',
  components: {
    datepicker
  },
  data () {
    return {
      title: '',
      fromDate: '',
      toDate: '',
      offAmount: 0,
      offPercent: 0,
      activeStatus: '',
      description: '',
      photos: [],
      category: [],
      businessCatgId: 0,
      categoryId: '',
      statusLists: [
        {id: 1, name: 'Active'},
        {id: 2, name: 'Inactive'}
      ],
      categoryOptionLists: [],
      errors: {
        activeStatus: false,
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
      // const categories = this.category.map(title => ({ businessId: 0, categoryId: this.categoryOptionLists.find(c => c.title === title).categoryId }));

      const status = this.statusLists.find(s => s.id === this.activeStatus).name
      let data = {
        'activeStatus': status,
        'businessId': 1,
        'fromDate': this.fromDate,
        'notes': this.description,
        'offAmount': this.offAmount,
        'offPercent': this.offPercent,
        'title': this.title,
        'toDate': this.toDate
      }
      axios.post('https://offers-service-fluent-crocodile-nv.cfapps.io/offers', data)
        .then(res => {
          this.initData()
        })
        .catch(e => console.log(e))
    },
    uploadFile: function (event) {
      Object.values(event.target.files).map(file => {
        this.photos.push(file.name)
      })
    },
    onDelete: function () {
      this.initData()
    },
    onChange: function () {
      console.log('onChange')
      console.log(this.fromDate)
    },
    initData: function () {
      this.title = ''
      this.fromDate = ''
      this.toDate = ''
      this.offAmount = 0
      this.offPercent = 0
      this.activeStatus = ''
      this.description = ''
      this.categoryId = ''
      this.businessCatgId = 0
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

</style>
