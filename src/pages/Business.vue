<template>
  <div>
    <!-- Add Business Part -->
    <add-business-component />
    <!-- Current Promotins by Vendor -->
    <promotions-component />
    <!-- Business Inquiries -->
    <business-table-component />
  </div>
</template>
<script>
import AddBusinessComponent from '../components/AddBusinessComponent'
import PromotionsComponent from '../components/PromotionsComponent'
import BusinessTableComponent from '../components/BusinessTableComponent'
export default {
  name: 'Business',
  components: {
    AddBusinessComponent,
    PromotionsComponent,
    BusinessTableComponent
  }
}
</script>
