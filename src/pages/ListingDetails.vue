<template>
  <!-- Content -->
  <div class="page-content bg-white">
    <!-- Section Banner -->
    <banner-component/>
    <!-- Section Banner END -->
    <!-- contact area -->
    <venues-details-component :id="this.$route.params.id"/>
    <!-- contact area END -->
    <!-- Modal -->
    <manager-modal-component />
    <!-- Modal End -->
    <!-- Modal -->
    <request-modal-component />
    <!-- Modal End -->
    <!-- Modal -->
    <edit-modal-component />
    <!-- Modal End -->
  </div>
  <!-- Content END-->
</template>
<script>
import BannerComponent from '../components/details/BannerComponent'
import VenuesDetailsComponent from '../components/details/VenuesDetailsComponent'
import RequestModalComponent from '../components/RequestModalComponent'
import EditModalComponent from '../components/details/EditModalComponent'
import ManagerModalComponent from '../components/details/ManagerModalComponent'
export default {
  name: 'ListingDetails',
  components: {
    BannerComponent,
    VenuesDetailsComponent,
    RequestModalComponent,
    EditModalComponent,
    ManagerModalComponent
  }
}
</script>
