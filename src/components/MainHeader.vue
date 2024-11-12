<template>
  <header class="main__header" v-if="store.isLoggedIn">
    <!-- LOGO -->
    <div class="header__logo">
      <img src="@/assets/Logo_Learnified.png" alt="Logo" />
    </div>

    <!-- MOBILE HAMBURGER BUTTON -->
    <button @click="toggleMenu" class="header__hamburger" v-if="isMobile">
      <span class="hamburger-icon"></span>
      <span class="hamburger-icon"></span>
      <span class="hamburger-icon"></span>
    </button>

    <!-- NAVIGATION -->
    <nav class="header__nav" :class="{ 'nav--open': menuOpen }">
      <router-link to="/" class="nav__item">Learnified</router-link>
      <router-link to="/flashcards" class="nav__item">Karteikarten</router-link>
      <router-link to="/quiz" class="nav__item">Quizbox</router-link>
      <router-link to="/profile" class="nav__item">Profil</router-link>
      <button @click="logout" class="header__logout">Ausloggen</button>
    </nav>
  </header>

  <header class="main__header" v-else>
    <!-- LOGO -->
    <div class="header__logo">
      <img src="@/assets/Logo_Learnified.png" alt="Logo" />
    </div>

    <!-- NAVIGATION -->
    <nav class="header__nav" :class="{ 'nav--open': menuOpen }">
      <button @click="logout" class="header__logout">Einloggen</button>
    </nav>
  </header>
</template>

<script>
import { useUsersStore } from '@/stores/users'
export default {
  name: 'MainHeader',
  data() {
    return {
      menuOpen: false,
      isMobile: false,
      store: useUsersStore(),
    }
  },
  methods: {
    logout() {
      console.log('User ausgeloggt')
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768
      if (!this.isMobile) {
        this.menuOpen = false
      }
    },
  },
  mounted() {
    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile)
  },
}
</script>

<style scoped>
/* MOBILE ANSICHT */
.main__header {
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

/* MOBILE HAMBURGER BUTTON */
.header__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger-icon {
  width: 30px;
  height: 3px;
  background-color: #fff;
}

/* NAVI-ELEMENTE */
.header__nav {
  display: flex;
  gap: 1rem;
  align-items: center;
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

/* NAVIGATION MOBILE-ANSICHT */
.header__nav {
  display: none;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: var(--clr-green-dark);
  padding: 1rem;
  border-radius: 8px;
}

.header__nav.nav--open {
  display: flex;
  border: black solid 2px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75) !important;
}

/* DESKTOP-STYLING AB 768px */
@media (min-width: 768px) {
  .main__header {
    padding: 1rem 2rem;
    justify-content: space-between;
  }
  .header__logo img {
    height: 50px;
  }

  /* NAVIGATION HEADER */
  .header__nav {
    display: flex;
    gap: 2rem;
    align-items: center;
    position: relative;
    flex-direction: row;
    top: auto;
    justify-content: flex-start;

    width: 100%;
  }

  .header__logout {
    display: flex;
    position: absolute;
    font-size: 1.1rem;
    top: auto;
    right: 1px;
  }

  .header__hamburger {
    display: none;
  }
}
</style>
