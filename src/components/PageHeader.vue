<template>
  <header class="page-header">
    <h2>{{ headerText }}<br>{{ subheaderText }}</h2>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    headerText: {
      type: String,
      required: true
    },
    subheaderText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.page-header {
  margin-left: 3rem;
  width: 50%;
}

.page-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--clr-green-dark);
}
</style>
