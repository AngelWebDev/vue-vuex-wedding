<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">Business Competition</h2></div>
    <div class="row" v-if="data.length > 0">
      <carousel-3d :autoplay="true" :controls-visible="true" :clickable="false">
        <slide v-for="(slide, i) in data" :key="i" :index="i">
          <figure>
            <div class="image-wrapper">
              <img :src="slide.src" />
            </div>
            <figcaption>
              <h3>{{slide.category}}</h3>
              <p>{{slide.city}}.{{slide.state}}</p>
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
    data: Array
  }
}
</script>
<style scoped>
  .image-wrapper {
    width: 100%;
    height: 15vw;
    overflow: hidden;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    padding: 2px;
    margin: 2px;
  }
  p {
    margin-left: 10px;
  }
</style>
