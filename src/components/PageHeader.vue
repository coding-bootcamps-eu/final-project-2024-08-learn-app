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
  padding-block: 1rem;
  width: 100%;
}

.page-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--clr-green-dark);
}
</style>
