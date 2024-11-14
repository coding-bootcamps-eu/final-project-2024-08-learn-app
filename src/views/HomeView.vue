<template>
  <PageHeader :headerText="`Hallo ${userName}! 👋`" :subheaderText="'Was möchtest du tun?'" />
  <div class="home-view-wrapper">
    <section class="home-view-container">
      <section class="indexcards">
        <HomeViewCard
          :showRight="true"
          :showLeft="true"
          :cardText="this.text1"
          class="index-card"
          cardHeader="Karteikarten"
          textLeft="Hinzufügen"
          textRight="Kategorie wählen"
        />
        <div class="card-container">
          <p class="last-used"><em> Zuletzt verwendet</em></p>
          <div class="kartei-wrapper">
            <p class="last-tag">JavaScript</p>
            <RouterLink class="menu" :to="{ name: 'home' }">Lernen</RouterLink>
            <RouterLink class="menu" :to="{ name: 'home' }">Testen</RouterLink>
          </div>
        </div>
        <hr />
      </section>

      <section class="quizbox">
        <HomeViewCard
          :showRight="true"
          :showLeft="false"
          :cardText="this.text2"
          class="quiz-card"
          cardHeader="Quizbox"
          textLeft=""
          textRight="Quiz starten"
        />
        <div class="quiz-container">
          <p class="last-used"><em>Zuletzt verwendet</em></p>
          <div class="quiz-wrapper">
            <p class="last-tag">JavaScript</p>
            <p>1500 Punkte</p>
            <RouterLink class="menu" :to="{ name: 'home' }">Testen</RouterLink>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import HomeViewCard from '@/components/HomeViewCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  data() {
    return {
      text1:
        'Lerne mit Karteikarten oder teste dich selber. Dir fehlen Fragen oder Themen? Dann füge sie einfach selber hinzu.',
      text2:
        'Starte ein Quiz, um dein Wissen zu testen. Wähle eine oder mehrere Kategorien und jage den Highscore.',
    }
  },
  components: {
    HomeViewCard,
    PageHeader,
  },
}
</script>

<style scoped>
.home-view-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-view-container {
  display: flex;
  flex-direction: column;
  margin-inline: 1rem;
  gap: 7%;
}

.indexcards,
.quizbox {
  max-width: 370px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.card-container {
  margin: 2rem auto 2rem auto;
  font-size: 1rem;
}

.quiz-card,
.index-card {
  color: white;
  background-color: var(--clr-green-dark);
}
.quiz-container {
  margin: 2rem auto 2rem auto;
  font-size: 1rem;
}

.last-used {
  font-size: 0.9rem;
  color: grey;
}
.last-tag {
  display: inline;
}
.menu {
  color: var(--clr-green-dark);
}

.kartei-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quiz-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

hr {
  border-color: lightgray;
  border-width: 1px;
  width: 50%;
  margin: auto;
}

@media (min-width: 768px) {
  .home-view-container {
    flex-direction: row;
  }
  .indexcards,
  .quizbox {
    min-width: 390px;
    max-width: 400px;
    aspect-ratio: 10/6;
  }
  .quiz-card,
  .index-card {
    background-color: white;
    color: var(--clr-green-dark);
  }

  hr {
    display: none;
  }
}
</style>
