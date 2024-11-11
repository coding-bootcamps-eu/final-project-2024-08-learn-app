<template>
  <h1>App</h1>
  <MainHeader />
  <RouterView />
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  components: {
    Header,
  },
}
</script>
