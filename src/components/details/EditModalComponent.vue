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
                <input type="text" v-model="user.email" class="form-control" placeholder="Enter your email address">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Phone*</label>
                <input type="text" v-model="user.phone" class="form-control" placeholder="Enter your phone number">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Your name*</label>
                <input type="text" v-model="user.userName" class="form-control" placeholder="What's your name?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Your partner's name*</label>
                <input type="text" v-model="user.personName" class="form-control" placeholder="Who are you marrying?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Estimated guests*</label>
                <input type="text" v-model="user.estimatedGuest" class="form-control" placeholder="How many guests?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Estimated budget*</label>
                <input type="text" v-model="user.estimatedBudget" class="form-control" placeholder="How much budget?">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Inquiry date*</label>
                <input type="date" class="form-control" v-model="user.inquiryDate">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Program Type*</label>
                <input type="text" class="form-control" placeholder="Wedding" v-model="user.programType">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Program Start Date*</label>
                <input type="date" class="form-control" v-model="user.programStartDate">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Program End Date*</label>
                <input type="date" class="form-control" v-model="user.programEndDate">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-title">Full Address*</label>
                <input type="text" v-model="user.address" class="form-control" placeholder="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center m-t30">
              <button class="btn green gradient" @click="SaveUser">Save information</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditModalComponent',
  data () {
    return {
      user: {
        businessId: '',
        email: '',
        estimatedBudget: 0,
        estimatedGuest: 0,
        eventId: '',
        inquiryDate: '',
        notes: '',
        personName: '',
        phone: '',
        programEndDate: '',
        programStartDate: '',
        programType: '',
        status: '',
        userName: ''
      }
    }
  },
  mounted () {
    this.user = {
      email: localStorage.getItem('email') || '',
      estimatedBudget: localStorage.getItem('estimatedBudget') || '',
      estimatedGuest: localStorage.getItem('estimatedGuest') || '',
      inquiryDate: localStorage.getItem('inquiryDate') || '',
      notes: localStorage.getItem('notes') || '',
      personName: localStorage.getItem('personName') || '',
      phone: localStorage.getItem('phone') || '',
      programEndDate: localStorage.getItem('programEndDate') || '',
      programStartDate: localStorage.getItem('programStartDate') || '',
      programType: localStorage.getItem('programType') || '',
      address: localStorage.getItem('address') || '',
      userName: localStorage.getItem('userName') || ''
    }
  },
  methods: {
    SaveUser () {
      localStorage.setItem('email', this.user.email)
      localStorage.setItem('estimatedBudget', this.user.estimatedBudget)
      localStorage.setItem('estimatedGuest', this.user.estimatedGuest)
      localStorage.setItem('inquiryDate', this.user.inquiryDate)
      localStorage.setItem('notes', this.user.notes)
      localStorage.setItem('personName', this.user.personName)
      localStorage.setItem('phone', this.user.phone)
      localStorage.setItem('programEndDate', this.user.programEndDate)
      localStorage.setItem('programStartDate', this.user.programStartDate)
      localStorage.setItem('programType', this.user.programType)
      localStorage.setItem('address', this.user.address)
      localStorage.setItem('userName', this.user.userName)
    }
  }
}
</script>
