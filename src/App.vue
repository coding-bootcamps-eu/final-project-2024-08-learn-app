<template>
  <div class="app-container">
    <MainHeader />
    <main class="content">
      <RouterView />
    </main>
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
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
