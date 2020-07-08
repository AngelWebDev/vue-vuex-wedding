<template>
  <div class="section-full content-inner wedding-venues-details bg-gray">
    <div class="container">
      <div class="row ">
        <!-- Left part start -->
        <div class="col-xl-8 col-lg-7 col-md-12 p-b30">
          <div class="details-media-bx">
            <div class="featured-info">
              <h4 class="title">{{details.title}}</h4>
              <p class="address">
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
                <li><a href="#upto" class="scroll nav-link"><i class="la la-users"></i>Up to 200</a></li>
                <li><a href="#upto" class="scroll nav-link"><i class="la la-bed"></i>9 Bedrooms</a></li>
                <li><a href="#upto" class="scroll nav-link"><i class="la la-diamond"></i>Exclusive Use</a></li>
                <li><a href="#upto" class="scroll nav-link"><i class="la la-pencil"></i>Wedding Licence</a></li>
              </ul>
            </div>
            <div class="featured-media">
              <div class="featured-gallery">
                <img :src="details.images[0].imageUrl" alt=""/>
                <button class="lightGalleryButton"><i class="fa fa-picture-o"></i> View Photos (12)</button>
              </div>
            </div>
          </div>
          <a href="javascript:;" data-toggle="modal" data-target="#exampleModal2" class="btn btn-block gradient green m-b30">Request a quote</a>
          <h5 class="text-quote">
            Matt Wing is a professional and talented photographer who has an eye for the special moments in your day that could easily go unseen by other photographers. His gorgeous photography speaks for itself!
          </h5>
          <div class="row sp20">
            <div class="col-md-6 m-b20">
              <div class="card-bx red h100" data-toggle="modal" data-target="#deal">
                <div class="inner">
                  <span class="tag-btn">Exclusive Wedding Manager Deal</span>
                  <h6 class="title">Wedding Manager Couple Discount</h6>
                  <p>SENSATIONAL special offer for all remaining 2019 weekend dates:  £6,199 (incl. VAT) catering for 80 day guests/a total of 100 evening guests; DJ</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 m-b20">
              <div class="card-bx blue h100" data-toggle="modal" data-target="#deal">
                <div class="inner">
                  <span class="tag-btn">Wedding Manager Deal</span>
                  <h6 class="title">Seasonal Offer Available</h6>
                  <p>Save £800</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 m-b20">
              <div class="card-bx green h100" data-toggle="modal" data-target="#deal">
                <div class="inner">
                  <span class="tag-btn">Exclusive Wedding Manager Deal</span>
                  <h6 class="title">Wedding Manager Couple Discount</h6>
                  <p>Save £800</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 m-b20">
              <div class="card-bx yellow h100" data-toggle="modal" data-target="#deal">
                <div class="inner">
                  <span class="tag-btn">Exclusive Wedding Manager Deal</span>
                  <h6 class="title">Wedding Manager Couple Discount</h6>
                  <p>Save £800</p>
                </div>
              </div>
            </div>
          </div>

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
                <li><a data-toggle="modal" data-target="#edit-details" class="btn edit" href="javascript:;">Edit <i class="fa fa-pencil"></i></a></li>
                <li><strong>Email:</strong> example@gmail.com</li>
                <li><strong>Phone:</strong> +91 123 456 7890</li>
                <li><strong>Names:</strong> Deepak Gaur &amp; deepika gaur</li>
                <li><strong>Ideal date:</strong> 25th june 2019 </li>
                <li><strong>Estimated guests:</strong> 80</li>
              </ul>
              <div class="text-message">
                <form>
                  <textarea class="form-control">Hi,
                    We're interested in your services! Please could you share your availability around our date, plus any additional information?
                    Thank you!
                  </textarea>
                </form>
                <a href="#" class="btn btn-block gradient green">Request brochure</a>
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
    </div>
  </div>
</template>
<script>
import { Type } from '../../store/mutation-type'
import StarComponent from '../public/StarComponent'
export default {
  name: 'VenuesDetailsComponent',
  components: {
    StarComponent
  },
  props: {
    id: String
  },
  mounted () {
    this.$store.dispatch(Type.GET_BUSINESS, this.id)
  },
  computed: {
    details () {
      return this.$store.state.businessDetail
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
