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
import { useUsersStore } from './stores/users'

export default {
  components: {
    MainHeader,
    AppFooter,
  },
  created() {
    const userStore = useUsersStore()
    userStore.initializeUser()
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
