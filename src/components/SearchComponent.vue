<template>
  <div class="search-filter wadding-vanues-filter">
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
</template>
<script>
export default {
  name: 'SearchComponent'
}
</script>
