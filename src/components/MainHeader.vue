<template>
  <header class="header">
    <!-- LOGO -->
    <div class="header__logo">
      <img src="@/assets/Logo_Learnified.png" alt="Logo" />
    </div>

    <!-- NAVIGATION -->
    <nav class="header__nav">
      <router-link to="/" class="nav__item">Titel</router-link>
      <router-link to="/flashcards" class="nav__item">Karteikarten</router-link>
      <router-link to="/quiz" class="nav__item">Quizbox</router-link>
      <router-link to="/profile" class="nav__item">Profil</router-link>
    </nav>

    <!-- AUSLOGGEN BUTTON -->
    <button @click="logout" class="header__logout">Ausloggen</button>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    logout() {
      console.log('User ausgeloggt')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
/* MOBILE ANSICHT */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--clr-green-dark);
  color: #fff;
}

.header__logo img {
  height: 40px;
}

/* NAVI-ELEMENTE */
.header__nav {
  display: flex;
  gap: 1rem;
}

.nav__item {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}

.header__logout {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

/* DESKTOP-STYLING AB 768px */
@media (min-width: 768px) {
  .header {
    padding: 1rem 2rem;
  }
  .header__logo img {
    height: 50px;
  }
  .header__nav {
    gap: 2rem;
  }
  .header__logout {
    font-size: 1.1rem;
  }
}
</style>
