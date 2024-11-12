<template>
    <MainHeader />
    <!-- You maybe need a fixed MainHeader -->
    <!-- You can only change the content and fix the MainHeader  -->
    <div class="content">
        <RouterView />
    </div>
</template>


<script>
import MainHeader from '../components/MainHeader.vue'

export default {
  components: {
    MainHeader,
  },
}
</script>