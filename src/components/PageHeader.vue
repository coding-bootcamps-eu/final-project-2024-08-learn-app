<template>
  <header class="page-header">
    <h2>{{ headerText }}</h2>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    headerText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.page-header {
  padding: 1rem;
}

.page-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--clr-green-dark);
}
</style>
