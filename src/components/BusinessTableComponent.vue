<template>
  <section id="tabs" class="project-tab">
    <div class="container">
      <div class="form-title"><h2 class="title-purple">Business Inquiries</h2></div>
      <hr/>
      <div class="row">
        <div class="col-md-12">
          <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav1-tab" data-toggle="tab" href="#nav1" role="tab" aria-controls="nav1" aria-selected="true">In-Progress(3)</a>
              <a class="nav-item nav-link" id="nav2-tab" data-toggle="tab" href="#nav2" role="tab" aria-controls="nav2" aria-selected="false">Booked(1)</a>
              <a class="nav-item nav-link" id="nav3-tab" data-toggle="tab" href="#nav3" role="tab" aria-controls="nav3" aria-selected="false">Lost(1)</a>
              <a class="nav-item nav-link" id="nav4-tab" data-toggle="tab" href="#nav4" role="tab" aria-controls="nav4" aria-selected="false">All Enquiries(5)</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
              <table class="table">
                <thead>
                  <tr>
                    <th>Received</th>
                    <th>Names</th>
                    <th>Ideal date</th>
                    <th>Est. guests</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="add-list" colspan="6">
                      <div class="row">
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Previous </a>
                        </div>
                        <div class="col-md-4">
                          <label> Page
                          <input type="text" class="pageNumber" name="currentPageNum" v-model="currentPageNum" />
                          of 1
                          </label>
                        </div>
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Next </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
              <table class="table">
                <thead>
                  <tr>
                    <th>Received</th>
                    <th>Names</th>
                    <th>Ideal date</th>
                    <th>Est. guests</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="add-list" colspan="6">
                      <div class="row">
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Previous </a>
                        </div>
                        <div class="col-md-4">
                          <label> Page
                          <input type="text" class="pageNumber" />
                          of 1
                          </label>
                        </div>
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Next </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
              <table class="table">
                <thead>
                  <tr>
                    <th>Received</th>
                    <th>Names</th>
                    <th>Ideal date</th>
                    <th>Est. guests</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="add-list" colspan="6">
                      <div class="row">
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Previous </a>
                        </div>
                        <div class="col-md-4">
                          <label> Page
                          <input type="text" class="pageNumber" name="currentPageNum" v-model="currentPageNum" />
                          of 1
                          </label>
                        </div>
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Next </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
              <table class="table">
                <thead>
                  <tr>
                    <th>Received</th>
                    <th>Names</th>
                    <th>Ideal date</th>
                    <th>Est. guests</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                  <tr>
                    <td>June 18th</td>
                    <td>Paul & vic</td>
                    <td> 15th Aug 2020 </td>
                    <td>120</td>
                    <td> <a class="btn btn-secondary"> PROGRESS </a> </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="add-list" colspan="6">
                      <div class="row">
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Previous </a>
                        </div>
                        <div class="col-md-4">
                          <label> Page
                          <input type="text" class="pageNumber" name="currentPageNum" v-model="currentPageNum" />
                          of 1
                          </label>
                        </div>
                        <div class="col-md-4">
                          <a class="btn btn-primary"> Next </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BusinessTableComponent'
}
</script>
