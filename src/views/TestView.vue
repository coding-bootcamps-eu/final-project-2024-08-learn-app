<template>
  <main>
    <index-card />

    <section v-if="showButtons" class="btn-container">
      <main-button text="Richtig" colors="lightgreen" />
      <main-button text="Falsch" colors="orange" />
    </section>
    <a v-if="showLink" href="#" @click.prevent="revealButtons">Aufdecken</a>
    <p class="exit">Exit</p>
  </main>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import IndexCard from '@/components/IndexCard.vue'

export default {
  components: {
    MainButton,
    IndexCard,
  },
  data() {
    return {
      showButtons: false,
      showLink: true,
      showExit: false,
    }
  },
  methods: {
    revealButtons() {
      this.showButtons = true
      this.showLink = false
    },
  },
}
</script>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-inline: 1rem;
}

.btn-container {
  margin-top: 2rem;
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  text-align: start;
  color: var(--clr-green-dark);
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  font-weight: 550;
  width: 100%;
  max-width: 550px;
  margin-top: 3rem;
  cursor: pointer;
}

a:hover {
  opacity: 0.7;
}

.exit {
  position: fixed;
  bottom: calc(1.5rem + 2vw);
  right: calc(1.5rem + 2vw);

  cursor: pointer;

  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  color: var(--clr-green-dark);
}

@media (min-width: 480px) {
  main {
    padding-inline: calc(2rem + 7vw);
  }
}

@media (min-width: 900px) {
  a {
    font-weight: 300;
  }
}
</style>
