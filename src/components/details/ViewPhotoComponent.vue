<template>
  <div class="lg-outer lg-start-zoom lg-use-css3 lg-css3 lg-slide lg-show-after-load lg-pull-caption-up lg-has-thumb lg-can-toggle lg-use-transition-for-zoom lg-visible lg-thumb-open lg-grab lg-hide-items">
    <div class="lg" style="width:100%; height:100%">
      <div class="lg-inner" style="transition-timing-function: ease; transition-duration: 600ms;">
        <div class="lg-item lg-loaded lg-current lg-complete lg-zoomable lg-next-slide">
          <div class="lg-img-wrap" data-x="0" data-y="0" style="transform: translate3d(0px, 0px, 0px);">
            <img class="lg-object lg-image" :src="currentImage" data-scale="1" style="transform: scale3d(1, 1, 1);">
          </div>
        </div>
        <!-- <div class="lg-item lg-loaded lg-complete lg-zoomable">
          <div class="lg-img-wrap">
            <img class="lg-object lg-image" src="/static/images/gallery/pic2.jpg">
          </div>
        </div> -->
      </div>
      <div class="close">
        <a class="closebtn menu-close" @click="this.$parent.viewPhoto"><i class="ti-close"></i></a>
      </div>
      <div class="lg-actions">
        <a class="left" @click="prev(currentId)"><i class="ti-arrow-left"></i></a>
        <a class="right" @click="next(currentId)"><i class="ti-arrow-right"></i></a>
      </div>
      <div class="lg-sub-html">{{title}}</div>
      <div class="lg-progress-bar">
        <div class="lg-progress"></div>
      </div>
      <div class="lg-thumb-outer lg-grab" style="height: 100px;">
        <div class="lg-thumb lg-group" style="width: 1680px; position: relative; transform: translate3d(0px, 0px, 0px); transition-duration: 600ms;">
          <div data-vimeo-id="" :class=" currentId === index ? 'lg-thumb-item active' : 'lg-thumb-item'" v-for="(item, index) in images" :key="index">
            <img :src="item.imageUrl">
          </div>
        </div>
      <span class="lg-toogle-thumb lg-icon" ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ViewPhotoComponent',
  props: {
    images: Array,
    title: String
  },
  data () {
    return {
      currentImage: '',
      currentId: 0
    }
  },
  mounted () {
    this.currentImage = this.images[0].imageUrl
  },
  methods: {
    prev (id) {
      id--
      if (id <= 0) id = 0
      this.currentImage = this.images[id].imageUrl
      this.currentId = id
    },
    next (id) {
      id++
      if (id >= this.images.length) id = this.images.length - 1
      this.currentImage = this.images[id].imageUrl
      this.currentId = id
    }
  }
}
</script>
<style lang="postcss" scoped>
  .lg-toolbar.lg-group {
    display: block;
  }
  .close {
    position:absolute;
    right: 20px;
    top: 10px;
    z-index: 100000;
    float: right;
    color: white;
    opacity: 1;
    font-size: 20px !important;
  }
  .lg-actions {
    width: 100%;
    position: relative;
    top: 50%;
    z-index: 10000;
    color: white;
    font-size: 20px !important;
    opacity: 1;
  }
  .lg-actions .left {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
    background: #fd60a2;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }
  .lg-actions .right {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    background: #fd60a2;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }
  .lg-thumb-item {
    width: 100px;
    height: 100%;
    margin-right: 5px;
  }
</style>
