<template>
  <div class="page-content bg-white">
    <div class="content-block">
      <!-- Search Filter -->
      <search-component />
      <input type="text" class="form-control" placeholder="We’re looking for" id="datetimepicker4">
      <!-- Search Filter End -->
      <venues-component />
      <request-modal-component />
    </div>
  </div>
</template>
<script>
import SearchComponent from '../components/SearchComponent'
import VenuesComponent from '../components/Venues/VenuesComponent'
import RequestModalComponent from '../components/RequestModalComponent'
export default {
  name: 'WeddingVenues',
  components: {
    SearchComponent,
    VenuesComponent,
    RequestModalComponent
  }
}
</script>
<style scoped>
.form-control {
  margin-top: 53px;
}
</style>
