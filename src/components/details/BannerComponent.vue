<template>
  <div class="dlab-bnr-inr inner-banner text-center overlay-black-dark" style="background-image:url(/static/images/main-slider/slide1.jpg); background-size: cover;" id="app-banner">
    <div class="container">
      <div class="dlab-bnr-inr-entry">
        <h1 class="text-white">Listing Details</h1>
        <!-- Breadcrumb row -->
        <div class="breadcrumb-row">
          <ul class="list-inline">
            <li><a href="index.html"><i class="fa fa-home"></i></a></li>
            <li>Home</li>
            <li>Listing Details</li>
          </ul>
        </div>
        <!-- Breadcrumb row END -->
      </div>
    </div>
    <div class="search-filter">
      <div class="container">
        <form class="filter-form" action="wedding-venues-search.html">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <input type="text" class="form-control" placeholder="We’re looking for">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
              <input type="text" class="form-control" placeholder="Near">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
              <input type="text" class="form-control" placeholder="Or Called">
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-6 d-flex">
              <button class="btn btn-block gradient text-uppercase"> Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- <search-component/> -->
    <!-- Search Filter END -->
  </div>
</template>
<script>
import SearchComponent from '../public/SearchComponent'
export default {
  name: 'BannerComponent',
  components: {
    SearchComponent
  }
}
</script>
