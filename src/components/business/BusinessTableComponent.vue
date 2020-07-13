<template>
  <div class="container">
    <div class="form-title"><h2 class="title-purple">Business Inquiries</h2></div>
    <hr/>
    <div class="row">
      <div class="col-md-12">
        <nav>
          <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a v-for="item in this.nav_tab"
              :key="item.id"
              :class="item.class"
              :id="item.id"
              :data-toggle="item.data_toggle"
              :role="item.role"
              :aria-controls="item.aria_controls"
              :aria-selected="item.aria_selected"
              @click="getTableData(item.value)"
            >
              {{ item.title }} ( {{ item.number }} )
            </a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
            <table class="table">
              <thead>
                <tr>
                  <th>Inquiry Date</th>
                  <th>Start Date - End Date</th>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Estimated Guest</th>
                  <th>Budget</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="td in this.tableData" :key="td.inquiryId">
                  <td>{{td.inquiryDate}}</td>
                  <td>{{td.programStartDate + ' - ' + td.programEndDate}}</td>
                  <td>{{td.status}}</td>
                  <td>{{td.personName}}</td>
                  <td>{{td.programType}}</td>
                  <td>{{td.estimatedGuest}}</td>
                  <td>{{td.estimatedBudget}}</td>
                  <td>{{td.address}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Type } from '../../store/mutation-type'
export default {
  name: 'BusinessTableComponent',
  props: {
    id: String
  },
  data () {
    return {
      nav_tab: [
        {id: 1, class: 'nav-item nav-link active', data_toggle: 'tab', role: 'tab', aria_controls: 'nav1', aria_selected: 'true', title: 'BOOKED', value: 'BOOKED', number: 0},
        {id: 2, class: 'nav-item nav-link', data_toggle: 'tab', role: 'tab', aria_controls: 'nav2', aria_selected: 'false', title: 'INQUIRY/QUOTE', value: 'INQUIRY', number: 0},
        {id: 3, class: 'nav-item nav-link', data_toggle: 'tab', role: 'tab', aria_controls: 'nav3', aria_selected: 'false', title: 'ALL', value: 'ALL', number: 0}
      ],
      tableData: []
    }
  },
  async mounted () {
    if (this.id) {
      await this.$store.dispatch(Type.GET_ALL_INQUERIES, this.id)
      await this.initData()
    }
  },
  methods: {
    initData () {
      const tables = this.$store.state.allInqueries
      this.tableData = tables.filter(col => col.status === 'BOOKED')
      this.nav_tab = this.nav_tab.map(item => {
        return {
          ...item,
          number: item.value === 'ALL' ? tables.length : tables.filter(col => col.status === item.value).length
        }
      })
    },
    async getTableData (category) {
      const tables = await this.$store.state.allInqueries
      console.log(category, tables)
      if (category === 'ALL') {
        this.tableData = await tables
      } else {
        this.tableData = await tables.filter(col => col.status === category)
      }
    }
  }
}
</script>
