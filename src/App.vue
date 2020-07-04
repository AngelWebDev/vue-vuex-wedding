<template>
  <div id="app" class="page-wraper">
    <header-component />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>
