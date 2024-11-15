<template>
  <MainHeader />
  <RouterView />
  <AppFooter />
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
