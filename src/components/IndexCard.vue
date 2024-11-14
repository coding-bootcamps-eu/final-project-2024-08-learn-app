<template>
  <div :class="colors">
    <p :class="colors">{{ text }}</p>
    <slot/>
  </div>
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
div {
  border: solid 2px var(--clr-green-dark);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  aspect-ratio:  10 / 7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
}

.white {
  background-color: var(--clr-white);
  color: var(--clr-green-dark);
}

.green {
  background-color: var(--clr-green-dark);
  color: var(--clr-white);
}

@media (min-width: 768px) {
  div {
    padding: 1.5rem;
  }
}

@media (min-width: 1280px) {
  div {
    padding: 2rem;
  }
}
</style>
