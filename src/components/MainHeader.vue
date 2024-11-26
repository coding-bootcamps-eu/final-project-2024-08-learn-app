<template>
  <header class="main__header">
    <!-- LOGO UND TITEL FÜR MOBILE ANSICHT -->
    <div class="header__logo-title" v-if="isMobile">
      <router-link to="/home" class="header__logo">
        <img src="@/assets/Logo_Learnified.png" alt="Logo" />
      </router-link>
      <router-link to="/home" class="header__title">Learnified</router-link>
    </div>

    <!-- LOGO, TITEL UND NAVIGATION FÜR DESKTOP -->
    <div class="header__desktop" v-else>
      <div class="header__logo-container">
        <router-link to="/home" class="header__logo">
          <img src="@/assets/Logo_Learnified.png" alt="Logo" />
        </router-link>
        <router-link to="/home" class="header__title-desktop">Learnified</router-link>
      </div>
      <nav class="header__nav">
        <router-link v-if="isLoggedIn" to="/categories" class="nav__item">Karteikarten</router-link>
        <router-link v-if="isLoggedIn" to="/profile" class="nav__item">Profil</router-link>
        <button v-if="isLoggedIn" @click="logout" class="header__logout">Ausloggen</button>
        <router-link v-if="!isLoggedIn" to="/register" class="nav__item">Registrieren</router-link>
        <router-link v-if="!isLoggedIn" to="/login">
          <button class="header__logout">Einloggen</button>
        </router-link>
      </nav>
    </div>

    <!-- MOBILE HAMBURGER BUTTON -->
    <button @click="toggleMenu" class="header__hamburger" v-if="isMobile">
      <span class="hamburger-icon"></span>
      <span class="hamburger-icon"></span>
      <span class="hamburger-icon"></span>
    </button>

    <!-- MOBILE NAVIGATION -->
    <nav class="header__nav-mobile" :class="{ 'nav--open': menuOpen }" v-if="isMobile">
      <router-link v-if="isLoggedIn" to="/categories" class="nav__item" @click="toggleMenu"
        >Karteikarten</router-link
      >
      <router-link v-if="isLoggedIn" to="/profile" class="nav__item" @click="toggleMenu"
        >Profil</router-link
      >
      <button v-if="isLoggedIn" @click="logoutAndCloseMenu" class="header__logout">
        Ausloggen
      </button>
      <router-link v-if="!isLoggedIn" to="/register" class="nav__item" @click="toggleMenu"
        >Registrieren</router-link
      >
      <router-link v-if="!isLoggedIn" to="/login">
        <button class="header__logout" @click="toggleMenu">Einloggen</button>
      </router-link>
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
  computed: {
    isLoggedIn() {
      return this.store.isLoggedIn
    },
  },
  methods: {
    logout() {
      this.store.logout()
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    logoutAndCloseMenu() {
      this.logout()
      this.menuOpen = false
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth < 1099
      if (!this.isMobile) {
        this.menuOpen = false
      }
    },
    closeMenuOnClickOutside(event) {
      const menu = this.$el.querySelector('.header__nav-mobile')
      const hamburger = this.$el.querySelector('.header__hamburger')
      if (
        this.menuOpen &&
        menu &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        this.menuOpen = false
      }
    },
  },
  mounted() {
    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)
    document.addEventListener('click', this.closeMenuOnClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile)
    document.removeEventListener('click', this.closeMenuOnClickOutside)
  },
}
</script>

<style scoped>
/* SCHRIFTART */
@font-face {
  font-family: 'crew69';
  src: url('@/src/assets/fonts/crew.69.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}

/* ALLGEMEINER HEADER-STIL */
.main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4.5rem;
  background-color: var(--clr-green-dark);
  color: #fff;
  margin-bottom: 1.5rem;
}

/* LOGO UND TITEL FÜR MOBILE ANSICHT */
.header__logo-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.header__logo-title .header__logo img {
  height: 40px;
  margin-right: 0.5rem;
}

.header__title {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  font-family: 'crew69', sans-serif;
  font-size: 180%;
  letter-spacing: 5px;
  text-shadow: 3px 3px 10px black;
}

/* DESKTOP-ANSICHT LOGO, TITEL UND NAVIGATION */
.header__desktop {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
}

/* LOGO UND TITEL ZUSAMMEN IN DER DESKTOP-ANSICHT */
.header__logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header__title-desktop {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-family: 'crew69', sans-serif;
  font-size: 225%;
  letter-spacing: 5px;
  text-shadow: 3px 3px 10px black;
}

/* LOGO FÜR DESKTOP */
.header__logo img {
  height: 50px;
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

/* NAVIGATION ELEMENTE */
.header__nav,
.header__nav-mobile {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav__item {
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  letter-spacing: 5px;
  font-weight: 900;
  text-shadow: 3px 3px 10px black;
}

.header__logout {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  letter-spacing: 5px;
  font-weight: 900;
  text-shadow: 3px 3px 10px black;
  cursor: pointer;
}

/* NAVIGATION MOBILE-ANSICHT */
.header__nav-mobile {
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

.header__nav-mobile.nav--open {
  display: flex;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
  z-index: 10;
}

/* DESKTOP-STYLING AB 1100px */
@media (min-width: 1099px) {
  .header__logo-title {
    display: none;
  }

  .header__logo-container {
    display: flex;
  }

  .header__nav {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
  }

  .header__nav-mobile,
  .header__hamburger {
    display: none;
  }
}

@media (max-width: 768px) {
  header.main__header {
    padding: 1rem;
  }

  .header__logo-title {
    justify-content: flex-start;
  }

  .header__logo-title .header__logo img {
    margin-right: 0.5rem;
  }
}
</style>
