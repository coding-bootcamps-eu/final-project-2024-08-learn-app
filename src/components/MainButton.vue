<template>
  <button :class="colors">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    colors: {
      type: String,
      default: 'green',
    },
  },
}
</script>

<style scoped>
button {
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  color: var(--clr-white);
  font-size: 1.1rem;
  font-weight: bold;
}

.green {
  background-color: var(--clr-green-dark);
  color: var(--clr-white);
}

.lightgreen {
  background-color: var(--clr-green-light);
}

.orange {
  background-color: var(--clr-orange);
}

@media (min-width: 480px) {
  button {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }

  @media (min-width: 768px) {
    button {
      font-size: 1.5rem;
      padding: 0.75rem 2.25rem;
    }
  }
}
</style>
