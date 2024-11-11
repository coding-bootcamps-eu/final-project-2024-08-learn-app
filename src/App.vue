<template>
  <h1>App</h1>
  <Header />
  <RouterView />
</template>

<script>
import Header from './components/MainHeader.vue'

export default {
  components: {
    Header,
  },
}
</script>
