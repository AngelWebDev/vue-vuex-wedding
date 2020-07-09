<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">Business Competition</h2></div>
    <div class="row">
      <carousel-3d :autoplay="true" :controls-visible="true" :clickable="false">
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <figure>
              <img :src="slide.src" />
              <figcaption>
                <h2>{{slide.title}}</h2>
                <p>{{slide.desc}}</p>
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
  data () {
    return {
      slides: [{
        title: 'Seungri\'s Alleged',
        src: '/static/images/gallery/pic1.jpg',
        desc: '1 dummy description text here...'
      }, {
        title: 'Emma',
        src: '/static/images/gallery/pic1.jpg',
        desc: '2 dummy description text here...'
      }, {
        title: 'Kim Tae Hee',
        src: '/static/images/gallery/pic1.jpg',
        desc: '3 dummy description text here...'
      }, {
        title: 'Kate',
        src: '/static/images/gallery/pic1.jpg',
        desc: '4 dummy description text here...'
      }, {
        title: 'Sherry',
        src: '/static/images/gallery/pic1.jpg',
        desc: '5 dummy description text here...'
      }]
    }
  }
}
</script>
