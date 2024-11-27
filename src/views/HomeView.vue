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
      :text-last-category="lastCategoryText"
      class="index-cards"
      cardHeader="Karteikarten"
      textLeft="Hinzufügen"
      textRight="Kategorie wählen"
      textFooterLeft="Lernen"
      textFooterRight="Testen"
      :targetLeft="'/addcard/' + getCategoryId"
      :targetRight="this.categoryLink"
      :targetFooterLeft="'/learn/' + getCategoryId"
      :targetFooterRight="'/test/' + getCategoryId"
      :userPoints="lastUserPoints"
      :showUserPoints="false"
      :showFooterLeft="true"
    />
    <HomeViewCard
      :showRight="true"
      :showLeft="false"
      :cardText="this.text2"
      :text-last-category="lastCategoryText"
      class="quiz-box"
      cardHeader="Quizbox"
      textLeft="Hinzufügen"
      textRight="Quiz starten"
      textFooterLeft="Hinzufügen"
      textFooterRight="Starten"
      :targetLeft="'/quiz/' + getCategoryId"
      :targetRight="'/quiz/' + getCategoryId"
      :userPoints="lastUserPoints"
      :targetFooterLeft="'/quiz/' + getCategoryId"
      :targetFooterRight="'/quiz/' + getCategoryId"
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
      categoryLink: { name: 'categories' },
      lastCategoryText: '',
      lastUserPoints: '',
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

    getCategoryId() {
      return this.store.currentUser.lastPlayed
    },
  },
  methods: {
    async setCategoryText() {
      let text = await this.store.fetchCategoryWithCards(this.store.currentUser.lastPlayed)
      this.lastCategoryText = text.title
    },

    async setUserPoints() {
      this.allHighscores = await this.store.fetchHighscores()
      this.lastUserPoints = 0
      for (let scores of this.allHighscores) {
        if (scores.userId === this.store.currentUser.id) {
          this.lastUserPoints = scores.score
        }
      }
    },
  },

  async created() {
    await this.setUserPoints()
    await this.setCategoryText()
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
