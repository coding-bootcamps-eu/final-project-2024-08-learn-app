<template>
    <main>
      <page-header class="page-header" headerText="Quizmodus"/>
      <index-card class="index-card" text="Wie heißt der Entwickler von vue.js?">
        <quiz-card/>
      </index-card>
      <p class="exit">Exit</p>
    </main>
  </template>
  
  <script>
  import IndexCard from '@/components/IndexCard.vue';
  import PageHeader from '@/components/PageHeader.vue';
  import QuizCard from '@/components/QuizCard.vue';
  
  export default {
    components: {
      IndexCard,
      PageHeader,
      QuizCard,
    },
    data() {
      return {
        showExit: false,
      }
    },
  }
  </script>
  
  <style scoped>
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-inline: 1rem;
  }

  .index-card {
    align-items: flex-start;
  }
  
  .page-header {
    display: none;
    max-width: 550px;
  }
  
  .exit {
    position: fixed;
    bottom: calc(1.5rem + 2vw);
    right: calc(1.5rem + 2vw);
  
    cursor: pointer;
  
    font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
    color: var(--clr-green-dark);
  }

  @media (min-width: 768px) {
    .page-header {
      display: block;
  }
  .index-card {
    margin-left: 3rem;
    margin-top: 1rem;
  }

  a {
      font-weight: 300;
    }
  }
  </style>