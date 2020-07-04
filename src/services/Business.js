import Api from '@/services/Api'

export default {
  getAllCategories () {
    return Api().get('/business/categories/all')
  }
}
