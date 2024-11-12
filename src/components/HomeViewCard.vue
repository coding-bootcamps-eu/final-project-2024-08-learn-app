<template>
  <section class="cardwrapper">
    <h1>{{ cardHeader }}</h1>
    <p>{{ cardText }}</p>
    <nav class="colors">
      <RouterLink class="rlink rlink-left" v-show="showLeft" :to="{ name: 'home' }">{{
        textLeft
      }}</RouterLink>
      <RouterLink class="rlink rlink-right" v-show="showRight" :to="{ name: 'home' }">{{
        textRight
      }}</RouterLink>
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    cardHeader: {
      type: String,
    },

    cardText: {
      type: String,
    },

    showRight: {
      type: Boolean,
      default: false,
    },

    showLeft: {
      type: Boolean,
      default: true,
    },

    textLeft: {
      type: String,
    },

    textRight: {
      type: String,
    },
  },
}
</script>

<style scoped>
.cardwrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 10/6;
  padding: 4%;
  border: 3px solid var(--clr-green-dark);
  color: white;
  background-color: var(--clr-green-dark);
}

h1 {
  font-size: clamp(2rem, 1.75rem + 0.6cqw, 4rem);
  margin-bottom: 5%;
  margin-top: 1%;
}

p,
.rlink {
  font-size: clamp(0.1rem, 0.9rem + 0.25cqw, 1.5rem);
  margin-bottom: 10%;
  color: inherit;
}

nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'one two';
  align-items: center;
}

.rlink-right {
  justify-self: end;
  grid-area: two;
}

.rlink-left {
  justify-self: start;
  grid-area: one;
}
</style>
