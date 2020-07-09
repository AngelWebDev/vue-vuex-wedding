<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">Offers Competition</h2></div>
    <div class="row" v-if="slides.length > 0">
      <carousel v-show="slides.length"
        :centerMode="false"
        :perPage="3"
        :navigationEnabled="true"
        paginationColor="#7e7e7e"
        paginationPosition="bottom"
        class="m-4"
        zIndex= "100 !important">
        <slide v-for="(slide, i) in slides" :key="i">
          <div class="listing-media" style="width: 100%;">
            <img :src="slide.src" />
          </div>
        </slide>
      </carousel>
    </div>
    <div class="row" v-else >
      No Data
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'Carousel3DComponent',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      slides: [{
        title: 'Seungri\'s Alleged',
        src: 'https://www.essensedesigns.com/wp-content/uploads/2018/11/1066-2-wpcf_530x845.jpg',
        desc: '1 dummy description text here...'
      }, {
        title: 'Emma',
        src: 'https://www.essensedesigns.com/wp-content/uploads/2018/11/1066-2-wpcf_530x845.jpg',
        desc: '2 dummy description text here...'
      }, {
        title: 'Kim Tae Hee',
        src: 'https://www.essensedesigns.com/wp-content/uploads/2018/11/1066-2-wpcf_530x845.jpg',
        desc: '3 dummy description text here...'
      }, {
        title: 'Kate',
        src: 'https://www.essensedesigns.com/wp-content/uploads/2018/11/1066-2-wpcf_530x845.jpg',
        desc: '4 dummy description text here...'
      }, {
        title: 'Sherry',
        src: 'https://www.essensedesigns.com/wp-content/uploads/2018/11/1066-2-wpcf_530x845.jpg',
        desc: '5 dummy description text here...'
      }]
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
  margin: 0px;
  height: 30vh;
  overflow: hidden;
}
.VueCarousel-slide {
      position: relative;
      color: #fff;
      font-size: 24px;
      text-align: center;
      min-height: 100px;
   }

   .label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
</style>
