<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <router-link to="/home" class="footer-home-link">
          <img src="@/assets/Logo_Learnified.png" alt="Learnified Logo" class="footer-logo" />
          <p>{{ currentYear }} Learnified</p>
        </router-link>
      </div>
      <nav>
        <router-link to="/Datenschutz">Datenschmutz</router-link>
        <router-link to="/impressum">Impressum</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
.footer {
  background-color: var(--clr-green-dark);
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  margin-top: 1.5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-home-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.footer-home-link:hover {
  text-decoration: none;
}

.footer-logo {
  width: 40px;
  height: auto;
}

.footer-content nav {
  margin-top: 10px;
}

.footer-content nav a {
  color: var(--clr-lightgray);
  margin: 0 10px;
  text-decoration: none;
}

.footer-content nav a:hover {
  text-decoration: none;
}
</style>
