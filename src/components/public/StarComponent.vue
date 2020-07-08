<template>
  <ul class="featured-star">
    <li v-if="rating >= 1"><i class="fa fa-star"></i></li>
    <li v-if="rating >= 2"><i class="fa fa-star"></i></li>
    <li v-if="rating >= 3"><i class="fa fa-star"></i></li>
    <li v-if="rating >= 4"><i class="fa fa-star"></i></li>
    <li v-if="rating >= 5"><i class="fa fa-star"></i></li>
  </ul>
</template>
<script>
export default {
  name: 'StarComponent',
  props: {
    rating: Number
  }
}
</script>
