import Api from '@/services/Api'

export default class Categories {
  static async getAllCategories () {
    const res = await Api().get('/business/categories/all')
    return res.data
  }
  static async getAllInqueries (id) {
    const res = await Api().get(`/business/${id}/inquiries/INQUIRY`)
    return res.data
  }
  static async getAllVendors () {
    const res = await Api().get('/business/VENDOR/all')
    return res.data
  }
  static async getAllPlaces () {
    const res = await Api().get('/business/places/all')
    return res.data
  }
  static async filteredBusiness (params) {
    const res = await Api().get(`/business/vendor/filter?${params}`)
    return res.data
  }
  static async getBusiness (params) {
    const res = await Api().get(`/business/${params}`)
    return res.data
  }
}
