<template>
  <main>
    <page-header class="page-header" headerText="Lernmodus" />
    <div class="card-container">
      <index-card class="question-card" text="Wie heißt der Entwickler von vue.js?"/>
      <index-card class="answer-card mt-1" colors="white" text="Evan You"/>
    </div>
    <div class="link-container mt-1">
      <a>Zurück</a>
      <a>Weiter</a>
    </div>
  </main>
</template>
<script>
import IndexCard from '@/components/IndexCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    IndexCard,
    PageHeader,
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

.page-header {
  display: none;
  max-width: 550px;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 550px;
}

a {
  color: var(--clr-green-dark);
  cursor: pointer;
}

@media (min-width: 768px) {
  .page-header {
    display: block;
    min-width: 100%;
    padding-block: 2.5rem;
  }

  .card-container {
    flex-direction: row;
  }

  .question-card, .answer-card {
    transform: scaleY(1.2);
  }

  .answer-card {
    margin-top: 0;
    margin-left: 1rem;
  }

  .link-container {
    min-width: 100%;
    margin-top: 2.5rem;
  }
}

@media (min-width: 1160px) {
  main {
    margin-inline: 10rem;
  }

  .card-container {
    justify-content: space-between;
  }
}

@media (min-width: 1600px) {
  main {
    margin-inline: 20rem;
  }
}
</style>
