<template>
  <div class="modal fade deal-modal" id="deal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <a href="#" class="btn red btn-sm radius-xl">Wedding Manager Deal</a>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="deal-inner">
            <h5 class="title">Weekend March 2020 Offer</h5>
            <span class="price">Save £800</span>
            <p>This special offer for weekends in March 2020 includes: catering for 60 day guests/catering for a total of 100 guests in the evening; videographer; DJ Friday: £6,355 Saturday: £6,855 Sunday: £5,855</p>
            <span class="date">Offer expires: 31/03/2020</span>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn">Redeem offer</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManagerModalComponent'
}
</script>
