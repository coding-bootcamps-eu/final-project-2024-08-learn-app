<template>
  
  <div>
    <MainHeader />
    <RouterView />
    <AppFooter />
  </div>
  
  
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import AppFooter from './components/Footer.vue'

export default {
  components: {
    MainHeader,
    AppFooter,
  },
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>