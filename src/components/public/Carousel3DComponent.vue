<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">More Businesses for {{category}} in {{city}}</h2></div>
    <div class="row" v-if="data.length > 0">
      <carousel-3d :autoplay="true" :autoplayTimeout="5000" :animationSpeed="1000" :controls-visible="true" :clickable="false">
        <slide v-for="(slide, i) in data" :key="i" :index="i">
          <figure>
            <div class="image-wrapper">
              <img :src="slide.src" @click="moveToOther(slide.id)" v-if="slide.id"/>
              <img :src="slide.src" v-else/>
            </div>
            <figcaption>
              <h5>{{slide.title}}</h5>
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: 'Carousel3DComponent',
  components: {
    Carousel3d,
    Slide
  },
  props: {
    data: Array,
    category: String,
    city: String
  },
  methods: {
    moveToOther (id) {
      this.$router.push(`/business/detail/${id}`)
    }
  }
}
</script>
<style scoped>
  .image-wrapper {
    width: 100%;
    height: 40vh;
    overflow: hidden;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h5 {
    padding: 2px;
    margin: 2px;
    text-align: center;
  }
  p {
    margin-left: 10px;
    font-size: 15px;
    text-align: center;
  }
  figcaption {
    width: 100%;
    height: 6vh;
    background: white;
    position: absolute;
    bottom: 0px;
    opacity: 0.5;
  }
  figcaption:hover {
    opacity: 0.8;
  }
</style>
