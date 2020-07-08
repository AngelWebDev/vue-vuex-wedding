<template>
  <div class="modal fade add-guest planner-modal-bx" id="edit-details" tabindex="-1" role="dialog" aria-labelledby="edit-details" aria-hidden="true">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <h2 class="modal-title text-center">Edit your details</h2>
        <form>
          <div class="form-group text-center">
            <small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Email*</label>
                <input type="text" class="form-control" placeholder="Enter your email address">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Phone*</label>
                <input type="text" class="form-control" placeholder="Enter your phone number">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Your name*</label>
                <input type="text" class="form-control" placeholder="What's your name?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Your partner's name*</label>
                <input type="text" class="form-control" placeholder="Who are you marrying?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Estimated guests*</label>
                <input type="text" class="form-control" placeholder="How many guests?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Ideal date*</label>
                <input type="date" class="form-control">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Location*</label>
                <input type="text" class="form-control" placeholder="Chelmsford, UK">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center m-t30">
              <button class="btn green gradient">Save information</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditModalComponent'
}
</script>
