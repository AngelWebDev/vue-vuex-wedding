<template>
  <div class="modal fade add-guest planner-modal-bx" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal2" aria-hidden="true">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <h2 class="modal-title text-center">Send a message to Maidens Barn</h2>
        <form>
          <div class="form-group text-center">
            <small class="small-bx">We will pass your details to the supplier so they can get back to you with a proposal.</small>
          </div>
          <div>
            <ul class="popup-profile-info">
              <li><strong>Email:</strong><span>kkgaur9736@gmail.com</span></li>
              <li><strong>Names:</strong><span>kk gaur & kk kuldeep</span></li>
              <li><strong>Phone:</strong><span>[recommended]</span></li>
              <li><strong>Ideal date:</strong><span>20th Feb 2020</span></li>
              <li><strong>Estimated guests:</strong><span>[missing]</span></li>
              <li><a class="collapsed btn-link" role="button" data-toggle="collapse" href="#edit" aria-expanded="false" aria-controls="edit">Edit <i class="fa fa-pencil"></i></a></li>
            </ul>
            <div class="filter-bx fade collapse gray-bx" id="edit" style="">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label-title">Email address</label>
                    <input type="text" class="form-control" placeholder="Add an email">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label-title">Phone number</label>
                    <input type="text" class="form-control" placeholder="Add a phone number">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label-title">Your name</label>
                    <input type="text" class="form-control" placeholder="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label-title">Your partner's name</label>
                    <input type="text" class="form-control" placeholder="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label-title">Estimated guests</label>
                    <input type="text" class="form-control" placeholder="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label-title">Ideal date</label>
                    <input id="example_1" class="form-control" type="text">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group gray-bx">
            <label class="label-title">Your must-haves</label>
            <ul class="select-list clearfix list-inline list-3">
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="more-info">
                  <label class="custom-control-label" for="more-info">More info</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Brochure">
                  <label class="custom-control-label" for="Brochure">Brochure</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Pricing-details">
                  <label class="custom-control-label" for="Pricing-details">Pricing details</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Alternative-dates">
                  <label class="custom-control-label" for="Alternative-dates">Alternative-dates</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Availability">
                  <label class="custom-control-label" for="Availability">Availability</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Quote">
                  <label class="custom-control-label" for="Quote">Quote</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Showround-date">
                  <label class="custom-control-label" for="Showround-date">Showround date</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="Other">
                  <label class="custom-control-label" for="Other">Other</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="form-group gray-bx">
            <div class="text-center">
              <a class="collapsed black btn-link" role="button" data-toggle="collapse" href="#maidens-barn" aria-expanded="false" aria-controls="maidens-barn"><i class="fa fa-plus-circle"></i> Add a custom message</a>
            </div>
            <div class="filter-bx fade collapse" id="maidens-barn" style="">
              <div class="row">
                <div class="col-md-12">
                  <div class="m-t30">
                    <label class="label-title">Edit your message below</label>
                    <textarea class="form-control" placeholder="Add an email"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center m-t30">
              <button class="btn green gradient">Request brochure</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalComponent'
}
</script>
