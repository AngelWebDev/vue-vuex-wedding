<template>
  <div class="page-wraper">
    <!-- Add Promotion -->
    <add-promotion-component />
    <!-- Current Promotions by Vendor -->
    <promotions-component />
  </div>
</template>
<script>
import AddPromotionComponent from '../components/AddPromotionComponent'
import PromotionsComponent from '../components/PromotionsComponent'
export default {
  name: 'Promotion',
  components: {
    AddPromotionComponent,
    PromotionsComponent
  }
}
</script>
