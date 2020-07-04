<template>
  <div class="item">
    <div class="shadow-effect">
      <div class="listing-bx m-b20 expert-advice">
        <div class="listing-media">
          <img :src="data.src" alt="">
          <div class="media-info">
            <a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart-o"></i></a>
          </div>
        </div>
        <div class="listing-info">
          <h3 class="title"><a :href="data.link_url">{{data.title}}</a></h3>
          <a :href="data.link_url" class="btn-link">{{data.sub_title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageItemComponent',
  props: {
    data: Object
  }
}
</script>
