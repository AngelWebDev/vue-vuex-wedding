<template>
  <div class="page-content bg-white">
    <div class="content-block">
      <!-- Search Filter -->
      <search-component />
      <input type="text" class="form-control" placeholder="We’re looking for" id="datetimepicker4">
      <!-- Search Filter End -->
      <venues-component />
      <modal-component />
    </div>
  </div>
</template>
<script>
import SearchComponent from '../components/SearchComponent'
import VenuesComponent from '../components/Venues/VenuesComponent'
import ModalComponent from '../components/ModalComponent'
export default {
  name: 'WeddingVenues',
  components: {
    SearchComponent,
    VenuesComponent,
    ModalComponent
  }
}
</script>
<style scoped>
.form-control {
  margin-top: 53px;
}
</style>
