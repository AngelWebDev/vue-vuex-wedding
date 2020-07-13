<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">Current Promotions by Vendor</h2></div>
    <hr/>
    <div class="row">
      <div class="col-sm-12" v-if="this.errors.isImageData">
        <carousel :autoplay="true" :nav="false" :dots="false" :items="3">
          <div class="item" v-for="(image, index) in this.images" :key="index">
            <div class="shadow-effect">
              <div class="listing-bx m-b20 expert-advice">
                <div class="listing-media">
                  <img :src="image.imageUrl" alt="" v-if="image.id" @click="moveToOffer(image.id)">
                  <img :src="image.imageUrl" alt="" v-else >
                  <div class="media-info">
                    <a class="like-btn"><i class="fa fa-heart-o"></i></a>
                  </div>
                </div>
                <div class="listing-info">
                  <h3 class="title">{{image.imageTitle}}</h3>
                </div>
              </div>
            </div>
          </div>
        </carousel>
      </div>
      <div class="col-sm-12" v-if="!this.errors.isImageData">
        <p> There is no data </p>
      </div>
    </div>
  </div>
</template>
<script>
import Offer from '../../services/Offer'
import carousel from 'vue-owl-carousel'
export default {
  name: 'ImageItemComponent',
  components: {
    carousel
  },
  props: {
    businessId: String
  },
  data () {
    return {
      images: [],
      errors: {
        isImageData: false
      }
    }
  },
  mounted () {
    if (this.businessId) {
      Offer().get(`/offers/business/${this.businessId}`)
        .then(res => {
          if (res) {
            res.data.map(item => {
              this.images.push({
                id: item.id,
                imageUrl: item.images[0].imageUrl,
                imageTitle: item.title,
                imageType: item.notes
              })
            })
            // if (this.images.length < 5) {
            //   let len = this.images.length
            //   while (len <= 5) {
            //     this.images.push({
            //       id: null,
            //       imageUrl: '/static/images/gallery/pic1.jpg',
            //       imageTitle: null,
            //       imageType: null
            //     })
            //     len++
            //   }
            // }
            this.errors.isImageData = true
          }
        })
        .catch(error => {
          if (error) this.errors.isImageData = false
        })
    }
  },
  methods: {
    moveToOffer: function (id) {
      this.$router.push(`/offers/${id}`)
    }
  }
}
</script>
<style scoped>
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
.title {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;
}
</style>
