<template>
  <div class="section-full content-inner wedding-venues-details bg-gray">
    <div class="container">
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
                <button class="lightGalleryButton"><i class="fa fa-picture-o"></i> View Photos (12)</button>
              </div>
            </div>
          </div>
          <a href="javascript:;" data-toggle="modal" data-target="#exampleModal2" class="btn btn-block gradient green m-b30">Request a quote</a>
          <h5 class="text-quote">
            {{details.shortDescription}}
          </h5>
          <!-- Pricing & Costs -->
          <h5 class="details-title" id="price">Pricing & Costs</h5>
          <div class="pricing-costs-box">
            <h5 class="title">Prices start at</h5>
            <h2 class="price">£1200</h2>
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
              <div class="title-head"><h5 class="title">Send a message to Calderfields Golf and Country Club</h5></div>
              <small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
              <ul class="vender-profile-list">
                <li><a data-toggle="modal" data-target="#edit-details" class="btn edit">Edit <i class="fa fa-pencil"></i></a></li>
                <li><strong>Email:</strong> {{user.email}}</li>
                <li><strong>Phone:</strong> {{user.phone}}</li>
                <li><strong>Names:</strong> {{user.userName}}</li>
                <li><strong>Inquiry date:</strong> {{user.inquiryDate}}</li>
                <li><strong>Estimated guests:</strong> {{user.estimatedGuest}}</li>
                <li><strong>Estimated budget:</strong> {{user.estimatedBudget}}</li>
              </ul>
              <div class="text-message">
                <div>
                  <textarea class="form-control" v-model="user.notes">
                  </textarea>
                </div>
                <a @click="submit" class="btn btn-block gradient green">Contact Business</a>
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
                <a href="javascript:;" data-toggle="modal" data-target="#exampleModal2" class="btn quote-btn">
                  <i class="fa fa-eur"></i>
                  <span>Request a quote</span>
                </a>
              </li>
              <li>
                <a href="javascript:;" data-toggle="modal" data-target="#contactSupplier" class="btn">
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
      <Carousel3DComponent />
      <CarouselComponent />
    </div>
    <EditModalComponent v-if="isShowModal" />
  </div>
</template>
<script>
import { Type } from '../../store/mutation-type'
import StarComponent from '../public/StarComponent'
import ImageItemComponent from '../public/ImageItemComponent'
import Carousel3DComponent from '../public/Carousel3DComponent'
import CarouselComponent from '../public/CarouselComponent'
import EditModalComponent from './EditModalComponent'
import Api from '../../services/Api'
export default {
  name: 'VenuesDetailsComponent',
  components: {
    StarComponent,
    ImageItemComponent,
    Carousel3DComponent,
    CarouselComponent,
    EditModalComponent
  },
  props: {
    id: String
  },
  data () {
    return {
      isShowModal: false,
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
  mounted () {
    this.$store.dispatch(Type.GET_BUSINESS, this.id)
    this.setUserData()
  },
  computed: {
    details () {
      return this.$store.state.businessDetail
    }
  },
  methods: {
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
      const payload = {
        ...this.user,
        businessId: parseInt(this.id),
        status: 'INQUIRY',
        eventId: 0
      }

      Api().post('/business/inquiries', payload)
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
</style>
