<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img src="@/assets/Logo_Learnified.png" alt="Learnified Logo" class="footer-logo" />
        <p>{{ currentYear }} Learnified</p>
      </div>
      <nav>
        <router-link to="/Datenschutz">Datenschmutz</router-link>
        <a href="/impressum">Impressum</a>
        <a href="/kontakt">Kontakt</a>
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
