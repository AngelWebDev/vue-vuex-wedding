<template>
  <div>
    <ViewPhotoComponent v-if="isViewPhoto" :images="details.images" :title="details.title" />
    <div class="section-full content-inner wedding-venues-details bg-gray">
      <div class="container">
        <el-dialog
          title="Message"
          :visible.sync="dialogVisible"
          width="50%">
          <p v-html="message" />
        </el-dialog>
        <div class="row ">
          <!-- Left part start -->
          <div class="col-xl-8 col-lg-7 col-md-12 p-b30">
            <div class="details-media-bx">
              <div class="featured-info">
                <h4 class="title">{{details.title}}</h4>
                <p class="address" v-if="details.address">
                  <i class="fa fa-map-marker m-r5 text-primary"></i>
                  {{details.address.address}}.
                  {{details.address.city}}.
                  {{details.address.state}}.
                  {{details.address.country}}
                </p>
                <star-component :rating="details.rating" />
              </div>
              <div class="featured-lists">
                <ul class="navbar">
                  <li><a href="#price" class="scroll nav-link"><i class="la la-money"></i>{{details.priceRange}} for Venue Hire</a></li>
                  <li><a href="#upto" class="scroll nav-link"><i class="la la-users"></i>{{details.featureValue1}}</a></li>
                  <li><a href="#upto" class="scroll nav-link"><i class="la la-bed"></i>{{details.specialMessage1}}</a></li>
                  <li><a href="#upto" class="scroll nav-link"><i class="la la-diamond"></i>{{details.specialMessage2}}</a></li>
                  <!-- <li><a href="#upto" class="scroll nav-link"><i class="la la-pencil"></i>Wedding Licence</a></li> -->
                </ul>
              </div>
              <div class="featured-media">
                <div class="featured-gallery">
                  <img :src="details.images[0].imageUrl" alt="" v-if="details.images"/>
                  <button class="lightGalleryButton" @click="viewPhoto"><i class="fa fa-picture-o"></i> View Photos ({{details.images && details.images.length > 0 ? details.images.length : 0}})</button>
                </div>
              </div>
            </div>
            <h5 class="text-quote">
              {{details.shortDescription}}
            </h5>
            <!-- Pricing & Costs -->
            <h5 class="details-title" id="price">Pricing & Costs</h5>
            <div class="pricing-costs-box">
              <h5 class="title"><i class="la la-money"></i>  <span>{{details.priceRange}}</span> for Venue Hire</h5>
            </div>
            <!-- Full Description -->
            <h5 class="details-title">Full Description</h5>
            <div class="description-box">
              <p>
                {{details.longDescription}}
              </p>
            </div>
            <!-- Full Description End -->
            <!-- Location -->
            <div class="location-details">
              <ul class="info-bx">
                <li><a href=""><i class="la la-laptop"></i>Website</a></li>
                <li><a href=""><i class="la la-envelope"></i>Email</a></li>
                <li><a href=""><i class="la la-phone"></i>01787374544</a></li>
              </ul>
            </div>
            <!-- Location END -->
          </div>
          <!-- Left part END -->
          <!-- Side bar start -->
          <div class="col-xl-4 col-lg-5 col-md-12">
            <aside class="side-bar listing-side-bar">
              <div class="venues-sidebar-info">
                <div class="title-head"><h5 class="title">Send a message to {{details.title}}</h5></div>
                <small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
                <div class="text-message">
                  <a data-toggle="modal" data-target="#edit-details" class="btn btn-block gradient green" @click="changeStatus('INQUIRY')">Contact Business</a>
                </div>
              </div>
            </aside>
            <aside class="side-bar listing-side-bar sticky-top">
              <ul class="vender-details-form">
                <li class="btn-group-toggle" data-toggle="buttons">
                  <label class="btn booked-btn">
                    <i class="icon1 fa fa-thumbs-up"></i>
                    <i class="icon2 fa fa-thumbs-o-up"></i>
                    <input type="checkbox" name="options" id="option1" checked="">
                    <span class="show1">Mark as booked</span>
                    <span class="show2">Booked</span>
                  </label>
                </li>
                <li class="btn-group-toggle" data-toggle="buttons">
                  <label class="btn shortlist-btn">
                    <i class="icon1 fa fa-heart"></i>
                    <i class="icon2 fa fa-heart-o"></i>
                    <input type="checkbox" name="options" id="option2">
                    <span class="show1">Shortlisted</span>
                    <span class="show2">Add to shortlist</span>
                  </label>
                </li>
                <li>
                  <a href="javascript:;" data-toggle="modal" data-target="#writeReviews" class="btn reviews-btn">
                    <i class="fa fa-star-o"></i>
                    <span>Write a Reviews</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" data-toggle="modal" data-target="#edit-details" class="btn quote-btn" @click="changeStatus('QUOTE')">
                    <i class="fa fa-eur"></i>
                    <span>Request a quote</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" data-toggle="modal" data-target="#edit-details" class="btn" @click="changeStatus('INQUIRY')">
                    <i class="fa fa-envelope-o"></i>
                    <span>Contact supplier</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" data-toggle="modal" data-target="#exampleModal2" class="btn showround-btn">
                    <i class="fa fa-gift"></i>
                    <span>Request showround</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <!-- Side bar END -->
        </div>
        <image-item-component :businessId="this.id" />
        <Carousel3DComponent :data="threeData" :category="details.bizCategories && details.bizCategories[0].categoryId" :city="details.address && details.address.city"/>
        <CarouselComponent :data="carouselData" />
      </div>
    </div>
  </div>
</template>
<script>
import { Type } from '../../store/mutation-type'
import StarComponent from '../public/StarComponent'
import ImageItemComponent from '../public/ImageItemComponent'
import Carousel3DComponent from '../public/Carousel3DComponent'
import CarouselComponent from '../public/CarouselComponent'
import EditModalComponent from './EditModalComponent'
import ViewPhotoComponent from './ViewPhotoComponent'
import Api from '../../services/Api'
import Offer from '../../services/Offer'
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)
export default {
  name: 'VenuesDetailsComponent',
  components: {
    StarComponent,
    ImageItemComponent,
    Carousel3DComponent,
    CarouselComponent,
    EditModalComponent,
    ViewPhotoComponent
  },
  props: {
    id: String
  },
  data () {
    return {
      isViewPhoto: false,
      isShowModal: false,
      threeData: [],
      carouselData: [],
      dialogVisible: false,
      message: '',
      user: {
        email: '',
        estimatedBudget: 0,
        estimatedGuest: 0,
        eventId: '',
        inquiryDate: '',
        notes: '',
        personName: '',
        phone: '',
        programEndDate: '',
        programStartDate: '',
        programType: '',
        address: '',
        userName: ''
      }
    }
  },
  async mounted () {
    await this.$store.dispatch(Type.GET_BUSINESS, this.id)
    await this.setUserData()
    await this.getThreeData()
    await this.getCarouselData()
    if (localStorage.getItem('submit') === 'true') {
      this.submit()
      localStorage.setItem('submit', false)
    }
  },
  computed: {
    details () {
      return this.$store.state.businessDetail
    }
  },
  methods: {
    async getThreeData () {
      const business = this.$store.state.businessDetail
      const categoryId = business.bizCategories.length > 0 && business.bizCategories[0].categoryId
      const city = business.address.city
      const state = business.address.state
      const country = business.address.country
      var params = ''
      if (categoryId) {
        params += `categoryId=${categoryId}&`
      }
      if (city) {
        params += `city=${city}&`
      }
      if (state) {
        params += `state=${state}&`
      }
      if (country) {
        params += `country=${country}`
      }
      await Api().get(`/business/VENDOR/filter?${params}`).then(res => {
        res.data.map(item => {
          this.threeData.push({
            src: item.images.length > 0 ? item.images[0].imageUrl : '',
            category: item.bizCategories.length > 0 ? item.bizCategories[0].categoryId : '',
            city: item.address.city || '',
            state: item.address.state || '',
            title: item.title || '',
            id: item.businessId
          })
        })
      })
    },
    async getCarouselData () {
      await Offer().get(`/offers/competitors/${this.id}`).then(res => {
        res.data.map(item => {
          this.carouselData.push({
            src: item.images && item.images.length > 0 ? item.images[0].imageUrl : '',
            title: item.title,
            notes: item.notes,
            id: item.id
          })
        })
      })
    },
    setUserData () {
      this.user = {
        email: localStorage.getItem('email') || '',
        estimatedBudget: parseInt(localStorage.getItem('estimatedBudget')) || '',
        estimatedGuest: parseInt(localStorage.getItem('estimatedGuest')) || '',
        inquiryDate: localStorage.getItem('inquiryDate') || '',
        notes: localStorage.getItem('notes') || '',
        personName: localStorage.getItem('personName') || '',
        phone: localStorage.getItem('phone') || '',
        programEndDate: localStorage.getItem('programEndDate') || '',
        programStartDate: localStorage.getItem('programStartDate') || '',
        programType: localStorage.getItem('programType') || '',
        address: localStorage.getItem('address') || '',
        userName: ''
      }
    },
    submit () {
      console.log(localStorage.getItem('status'))
      const payload = {
        ...this.user,
        businessId: parseInt(this.id),
        status: localStorage.getItem('status'),
        eventId: 0
      }
      console.log(payload)

      Api().post('/business/inquiries', payload).then(res => {
        if (res.status === 201) {
          this.dialogVisible = true
          this.message = 'Your Message was sent successfully.'
        }
      }).catch(error => {
        this.dialogVisible = true
        this.message = error
      })
    },
    viewPhoto () {
      this.isViewPhoto = !this.isViewPhoto
    },
    changeStatus (type) {
      localStorage.setItem('status', type)
    }
  }
}
</script>
<style scoped>
  .featured-gallery{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .featured-gallery img {
    width: 100%;
  }
  .title {
    margin-left: 20px;
  }
  .title i, span {
    color: #fd60a2;
  }
  .description-box {
    padding: 20px;
  }
</style>
