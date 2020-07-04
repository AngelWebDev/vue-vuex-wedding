<template>
  <form>
    <div class="form-group">
      <label class="label-title">Seated Dining Capacity</label>
      <div class="range-sliderbx">
        <input id="ex14" type="text" data-slider-ticks="[0, 10, 20, 40]" data-slider-ticks-snap-bounds="30" data-slider-ticks-labels='["$0", "$10", "$20", "$40"]' data-slider-ticks-positions="[0, 30, 70, 10]" />
      </div>
    </div>
    <div class="form-group">
      <label class="label-title">Your must-haves</label>
      <ul class="select-list clearfix list-inline">
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves1">
            <label class="custom-control-label" for="must-haves1">Exclusive Use</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves2">
            <label class="custom-control-label" for="must-haves2">Wedding Licence</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves3">
            <label class="custom-control-label" for="must-haves3">On-Site Accommodation</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves4">
            <label class="custom-control-label" for="must-haves4">Late Night Extension</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves5">
            <label class="custom-control-label" for="must-haves5">Alcohol Licence</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves6">
            <label class="custom-control-label" for="must-haves6">Late Night Extension</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves7">
            <label class="custom-control-label" for="must-haves7">Alcohol Licence</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves8">
            <label class="custom-control-label" for="must-haves8">Exclusive Use</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves9">
            <label class="custom-control-label" for="must-haves9">Wedding Licence</label>
          </div>
        </li>
        <li>
          <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input" id="must-haves10">
            <label class="custom-control-label" for="must-haves10">On-Site Accommodation</label>
          </div>
        </li>
      </ul>
    </div>
    <div class="accordion form-accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <a class="collapsed" href="javascript:;" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Venue Types
          </a>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <ul class="select-list clearfix list-inline">
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types1">
                  <label class="custom-control-label" for="venue-types1">Exclusive Use</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types2">
                  <label class="custom-control-label" for="venue-types2">Wedding Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types3">
                  <label class="custom-control-label" for="venue-types3">On-Site Accommodation</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types4">
                  <label class="custom-control-label" for="venue-types4">Late Night Extension</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types5">
                  <label class="custom-control-label" for="venue-types5">Alcohol Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types6">
                  <label class="custom-control-label" for="venue-types6">Late Night Extension</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types7">
                  <label class="custom-control-label" for="venue-types7">Alcohol Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types8">
                  <label class="custom-control-label" for="venue-types8">Exclusive Use</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types9">
                  <label class="custom-control-label" for="venue-types9">Wedding Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-types10">
                  <label class="custom-control-label" for="venue-types10">On-Site Accommodation</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <a class="collapsed" href="javascript:;" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Venue Styles
          </a>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            <ul class="select-list clearfix list-inline">
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles1">
                  <label class="custom-control-label" for="venue-styles1">Exclusive Use</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles2">
                  <label class="custom-control-label" for="venue-styles2">Wedding Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles3">
                  <label class="custom-control-label" for="venue-styles3">On-Site Accommodation</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles4">
                  <label class="custom-control-label" for="venue-styles4">Late Night Extension</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles5">
                  <label class="custom-control-label" for="venue-styles5">Alcohol Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles6">
                  <label class="custom-control-label" for="venue-styles6">Late Night Extension</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles7">
                  <label class="custom-control-label" for="venue-styles7">Alcohol Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles8">
                  <label class="custom-control-label" for="venue-styles8">Exclusive Use</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles9">
                  <label class="custom-control-label" for="venue-styles9">Wedding Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-styles10">
                  <label class="custom-control-label" for="venue-styles10">On-Site Accommodation</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <a class="collapsed" href="javascript:;" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Venue Features
          </a>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
            <ul class="select-list clearfix list-inline">
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features1">
                  <label class="custom-control-label" for="venue-features1">Exclusive Use</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features2">
                  <label class="custom-control-label" for="venue-features2">Wedding Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features3">
                  <label class="custom-control-label" for="venue-features3">On-Site Accommodation</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features4">
                  <label class="custom-control-label" for="venue-features4">Late Night Extension</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features5">
                  <label class="custom-control-label" for="venue-features5">Alcohol Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features6">
                  <label class="custom-control-label" for="venue-features6">Late Night Extension</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features7">
                  <label class="custom-control-label" for="venue-features7">Alcohol Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features8">
                  <label class="custom-control-label" for="venue-features8">Exclusive Use</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features9">
                  <label class="custom-control-label" for="venue-features9">Wedding Licence</label>
                </div>
              </li>
              <li>
                <div class="custom-control custom-checkbox checkbox-lg">
                  <input type="checkbox" class="custom-control-input" id="venue-features10">
                  <label class="custom-control-label" for="venue-features10">On-Site Accommodation</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center m-t10">
      <button class="btn gray">Apply filters (0)</button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'FormComponent'
}
</script>
