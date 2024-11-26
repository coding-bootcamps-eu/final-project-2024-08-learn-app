<template>
  <PageHeader
    class="page-header"
    :headerText="makeHeaderText"
    subheaderText="Was möchtest du tun?"
  />
  <div class="home-view-wrapper">
    <HomeViewCard
      :showRight="true"
      :showLeft="true"
      :cardText="this.text1"
      class="index-cards"
      cardHeader="Karteikarten"
      textLeft="Hinzufügen"
      textRight="Kategorie wählen"
      textFooterLeft="Lernen"
      textFooterRight="Testen"
      :targetLeft="this.addLink"
      :targetRight="this.categoryLink"
      :targetFooterLeft="this.learnLink"
      :targetFooterRight="this.testLink"
      :userPoints="this.userPoints"
      :showUserPoints="false"
      :showFooterLeft="true"
    />
    <HomeViewCard
      :showRight="true"
      :showLeft="false"
      :cardText="this.text2"
      class="quiz-box"
      cardHeader="Quizbox"
      textLeft="Hinzufügen"
      textRight="Quiz starten"
      textFooterLeft="Hinzufügen"
      textFooterRight="Starten"
      :targetLeft="this.quizLink"
      :targetRight="this.quizLink"
      :userPoints="this.userPoints"
      :targetFooterLeft="this.quizLink"
      :targetFooterRight="this.quizLink"
      :showUserPoints="true"
      :showFooterLeft="false"
    />
    <LeaderBoard class="leader-board" leaderBoardHeader="Brain Champs" />
  </div>
</template>
<script>
import HomeViewCard from '@/components/HomeViewCard.vue'
import LeaderBoard from '@/components/LeaderBoard.vue'
import PageHeader from '@/components/PageHeader.vue'

import { useUsersStore } from '@/stores/users'

export default {
  data() {
    return {
      text1:
        'Lerne mit Karteikarten oder teste dich selber. Dir fehlen Fragen oder Themen? Dann füge sie einfach selber hinzu.',
      text2:
        'Starte ein Quiz, um dein Wissen zu testen. Wähle eine oder mehrere Kategorien und jage den Highscore.',
      addLink: { name: 'home' },
      categoryLink: { name: 'categories' },
      learnLink: { name: 'home' },
      testLink: { name: 'home' },
      userPoints: '1500',
      showUserPoints: false,
      username: 'King of Kotelett',
      store: useUsersStore(),
    }
  },
  components: {
    HomeViewCard,
    LeaderBoard,
    PageHeader,
  },
  computed: {
    makeHeaderText() {
      return 'Hallo ' + this.store.currentUser.username + '! 👋'
    },
  },
}
</script>

<style scoped>
.page-header {
  display: none;
}
.home-view-wrapper {
  padding: 0 5vw 5vw 5vw;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 'index' 'quiz' 'leader';
  gap: 10vw;
}

.index-cards {
  grid-area: index;
}

.quiz-box {
  grid-area: quiz;
}

.leader-board {
  grid-area: leader;
}

@media (min-width: 768px) and (max-width: 1000px) {
  .home-view-wrapper {
    padding: 0;
    padding-left: 5rem;
    padding-bottom: 2rem;
    justify-content: start;
    align-items: start;
    grid-template-columns: 50% 45%;
    grid-template-rows: 50% 50%;
    grid-template-areas: 'index leader' 'quiz leader';
    gap: 2vw;
  }
}

@media (min-width: 1001px) {
  .page-header {
    display: block;
  }
  .home-view-wrapper {
    padding-top: 2vw;
    padding-left: 5rem;
    padding-right: 2vw;
    justify-content: center;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'index quiz leader';
    gap: 5vw;
  }
}
</style>
