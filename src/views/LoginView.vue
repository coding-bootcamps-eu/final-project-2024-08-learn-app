<template>
  <PageHeader :headerText="'Du brauchst ein Profil, um die App zu benutzen'" />
  <form>
    <div class="form-group">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" />
    </div>
    <div class="form-group">
      <label for="password">Passwort</label>
      <input v-model="password" id="password" type="text" />
    </div>
    <div class="button-class">
      <a href="#">Passwort vergessen</a>
      <MainButton :text="'Einloggen'" />
    </div>
  </form>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  components: { MainButton, PageHeader },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: 3rem;
  max-width: 500px;
}

label {
  color: var(--clr-green-dark);
}

input {
  min-height: 30px;
}

.form-group {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.button-class {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

a {
  color: var(--clr-green-dark);
  text-decoration: none;
  font-style: italic;
}

@media (max-width: 480px) {
  input,
  label {
    font-size: 0.9rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  input,
  label {
    font-size: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  input,
  label {
    font-size: 1.1rem;
  }
}

@media (min-width: 1280px) {
  input,
  label {
    font-size: 1.2rem;
  }
}
</style>
