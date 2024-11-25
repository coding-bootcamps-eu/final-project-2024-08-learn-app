<template>
  <PageHeader :headerText="'Login'" />
  <form @submit.prevent="loginUser">
    <div class="form-group">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" />
    </div>
    <div class="form-group">
      <label for="password">Passwort</label>
      <input v-model="password" id="password" type="password" minlength="5" required />
    </div>
    <div class="button-class">
      <a href="#">Passwort vergessen</a>
      <MainButton :text="'Einloggen'" type="submit" />
    </div>
  </form>
</template>

<script>
import { useUsersStore } from '@/stores/users'
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
  methods: {
    async loginUser() {
      const store = useUsersStore()
      await store.login(this.username, this.password)
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  max-width: 400px;
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
  align-self: center;
}

@media (max-width: 480px) {
  form {
    font-size: 0.9rem;
    margin-inline: 3rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  form {
    font-size: 1rem;
    margin-left: 5rem;
    margin-right: 7rem;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  form {
    font-size: 1.1rem;
    margin-left: 5rem;
  }
}

@media (min-width: 1280px) {
  form {
    font-size: 1.2rem;
    margin-left: 5rem;
  }
}
</style>
