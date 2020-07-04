<template>
  <section class="section-full bg-white content-inner about-us">
    <div class="container">
      <div class="form-title"><h2 class="title-purple">Current Promotions by Vendor</h2></div>
      <hr/>
      <div class="row">
        <div class="col-sm-12">
          <div id="customers-testimonials" class="owl-carousel">
            <image-item-component
              v-for="item in imageData"
              :key="item.id"
              :data="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ImageItemComponent from './ImageItemComponent'
export default {
  name: 'PromotionsComponent',
  components: {
    ImageItemComponent
  },
  computed: {
    imageData: {
      get () {
        return [
          {
            id: 1,
            src: '/static/images/listing/pic1.jpg',
            title: 'Outdoor Wedding Venues in London',
            sub_title: 'Expert Advice',
            link_url: '#'
          },
          {
            id: 2,
            src: '/static/images/listing/pic1.jpg',
            title: 'Outdoor Wedding Venues in London',
            sub_title: 'Expert Advice',
            link_url: '#'
          },
          {
            id: 3,
            src: '/static/images/listing/pic1.jpg',
            title: 'Outdoor Wedding Venues in London',
            sub_title: 'Expert Advice',
            link_url: '#'
          },
          {
            id: 4,
            src: '/static/images/listing/pic1.jpg',
            title: 'Outdoor Wedding Venues in London',
            sub_title: 'Expert Advice',
            link_url: '#'
          },
          {
            id: 5,
            src: '/static/images/listing/pic1.jpg',
            title: 'Outdoor Wedding Venues in London',
            sub_title: 'Expert Advice',
            link_url: '#'
          }
        ]
      }
    }
  }
}
</script>
