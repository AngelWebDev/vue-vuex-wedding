<template>
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="listing-bx listing-sm">
      <div class="listing-media">
        <img :src="data.src" alt="" @click="onClick(data.businessId)">
        <div class="offer">
          <div class="event available" v-if="data.specialMessage1">{{data.specialMessage1}}</div>
          <div class="event upcoming" v-if="data.specialMessage2">{{data.specialMessage2}}</div>
        </div>
        <div class="media-info">
          <star-component :rating="data.rating" />
          <a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart-o"></i></a>
        </div>
      </div>
      <div class="listing-info">
        <h3 class="title"><a href="listing-details.html">{{data.title}}</a></h3>
        <p class="location"><i class="fa fa-map-marker"></i> {{data.address.address + ". " + data.address.city}}</p>
        <ul class="place-info">
          <li class="vendor-guest">
            <span>Venue Vendor</span>
            <h6 class="title">{{data.priceRange}}</h6>
          </li>
          <li class="vendor-price">
            <span>{{data.featureType1}}</span>
            <h6 class="title">{{data.featureValue1}}</h6>
          </li>
        </ul>
        <a href="#" class="btn purple  btn-block gradient" data-toggle="modal" data-target="#exampleModal2">Request a brochure</a>
      </div>
    </div>
  </div>
</template>
<script>
import StarComponent from '../public/StarComponent'
export default {
  name: 'VenuesItemComponent',
  components: {
    StarComponent
  },
  props: {
    data: Object
  },
  methods: {
    onClick (id) {
      this.$router.push(`/business/detail/${id}`)
    }
  }
}
</script>
<style scoped>
  .listing-media {
    width: 100%;
    height: 15vw;
    overflow: hidden;
  }
  .listing-media img {
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    .listing-media {
      height: 25vw;
    }
  }
  @media (max-width: 576px) {
    .listing-media {
      height: 65vw;
    }
  }
</style>
