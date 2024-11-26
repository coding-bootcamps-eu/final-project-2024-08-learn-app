<template>
  <div class="card-container">
    <div class="card-wrapper">
      <section class="main-card">
        <h1>{{ cardHeader }}</h1>
        <p class="card-text">{{ cardText }}</p>
        <nav class="colors">
          <RouterLink class="rlink rlink-left" v-show="showLeft" :to="targetLeft">{{
            textLeft
          }}</RouterLink>
          <RouterLink class="rlink rlink-right" v-show="showRight" :to="targetRight">{{
            textRight
          }}</RouterLink>
        </nav>
      </section>
      <p class="last-used"><em>Zuletzt verwendet</em></p>

      <div class="card-footer">
        <p class="last-used-cat">JavaScript</p>
        <div>
          <RouterLink
            class="r-footer-link r-footerlink-left"
            v-show="showFooterLeft"
            :to="targetFooterLeft"
            >{{ textFooterLeft }}</RouterLink
          >
          <p class="user-points" v-show="showUserPoints">{{ userPoints }} Punkte</p>
          <RouterLink class="r-footer-link r-footerlink-right" :to="targetFooterRight">{{
            textFooterRight
          }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardHeader: {
      type: String,
    },

    targetLeft: {
      type: Object,
    },

    targetRight: {
      type: Object,
    },

    targetFooterLeft: {
      type: Object,
    },

    targetFooterRight: {
      type: Object,
    },

    cardText: {
      type: String,
    },

    userPoints: {
      type: String,
    },

    showRight: {
      type: Boolean,
    },

    showLeft: {
      type: Boolean,
    },

    showFooterLeft: {
      type: Boolean,
    },

    showUserPoints: {
      type: Boolean,
    },

    textLeft: {
      type: String,
    },

    textRight: {
      type: String,
    },

    textFooterLeft: {
      type: String,
    },

    textFooterRight: {
      type: String,
    },
  },
}
</script>

<style scoped>
.card-container {
  container-type: inline-size;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 0 2vw 3vw 2vw; */
}
.main-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 5/3;
  padding: 3cqw;
  border: 3px solid var(--clr-green-dark);
  color: white;
  background-color: var(--clr-green-dark);
  border-radius: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.user-points {
  display: inline;
}
.r-footer-link {
  color: var(--clr-green-dark);
}

.r-footerlink-right {
  margin-left: 10cqw;
}

h1 {
  font-size: calc(1rem + (160 - 1) * ((100cqw - 200px) / (2000 - 200)));
  margin-bottom: 2.5cqw;
  margin-top: 1cqw;
}

.last-used {
  margin-top: 5cqw;
  margin-bottom: 1cqw;
  font-size: calc(0.5rem + (50 - 0.5) * ((100cqw - 200px) / (2000 - 200)));
  color: gray;
}

.last-used-cat,
.user-points,
.r-footer-link {
  font-size: calc(0.5rem + (60 - 0.5) * ((100cqw - 200px) / (2000 - 200)));
}

.card-text,
.rlink {
  font-size: calc(0.5rem + (80 - 0.5) * ((100cqw - 200px) / (2000 - 200)));
  margin-bottom: 5cqw;
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

@media (min-width: 768px) {
  .main-card {
    color: var(--clr-green-dark);
    background-color: rgb(245, 245, 245);
  }
}
</style>
