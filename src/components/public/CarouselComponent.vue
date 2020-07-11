<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">Offers / Promotions from Other Businesses</h2></div>
    <div class="row" v-if="data.length > 0">
      <carousel
        :centerMode="false"
        :perPage="3"
        :navigationEnabled="true"
        paginationColor="#7e7e7e"
        paginationPosition="bottom"
        class="m-4"
        zIndex= "100 !important">
        <slide v-for="(slide, i) in data" :key="i">
          <div class="listing-media">
            <img :src="slide.src" />
          </div>
          <div class="content">
            <!-- <h3>{{slide.title}}</h3> -->
            <a :href="`/offers/${slide.id}`">{{slide.title}}</a>
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
  props: {
    data: Array
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
  height: 15vw;
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
.content {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0px;
  background: white;
  opacity: 0.7;
}
.content a {
  color: black;
  padding: 2px;
  margin: 2px 20px;
  text-align: center;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;
}
.content h3 {
  padding: 2px;
  margin: 2px;
  text-align: left;
}
</style>
