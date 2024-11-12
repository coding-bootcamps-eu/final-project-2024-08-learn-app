<template>
  <div :class="colors">
    <p :class="colors">{{ text }}</p>
    <p :class="colors">test</p>
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
  margin-inline: auto;
  width: 90%;
  max-width: 350px;
  height: 200px;
  border-radius: 5px;
  background-color: var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
  color: var(--clr-green-dark);
}

.white {
  background-color: var(--clr-white);
  color: var(--clr-green-dark);
}

.green {
  background-color: var(--clr-green-dark);
  color: var(--clr-white);
}

/* Hier die Karte nochmal zweimal zu verkleinern scheint mir unnötig */
@media (max-width: 480px) {
}

@media (min-width: 481px) and (max-width: 768px) {
}

@media (min-width: 769px) and (max-width: 1279px) {
  div {
    width: 80%;
    max-width: 400px;
    height: 220px;
    padding: 1.5rem;
  }
}

@media (min-width: 1280px) {
  div {
    max-width: 500px;
    height: 300px;
    padding: 2rem;
  }
}
</style>
