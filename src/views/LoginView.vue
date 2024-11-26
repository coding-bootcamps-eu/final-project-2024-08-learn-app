<template>
  <PageHeader :headerText="'Login'" />
  <form @submit.prevent="loginUser">
    <div class="form-group">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" />
    </div>
    <div class="form-group">
      <label for="password">Passwort</label>
      <input v-model="password" id="password" type="password" />
    </div>
    <div class="button-class">
      <a href="/forgotpw">Passwort vergessen?</a>
      <MainButton :text="'Einloggen'" type="submit" />
    </div>
  </form>
  <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
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
      errorMessage: '',
    }
  },
  components: { MainButton, PageHeader },
  methods: {
    async loginUser() {
      const store = useUsersStore()

      try {
        const userExists = await store.login(this.username, this.password)

        if (!userExists) {
          this.errorMessage = 'Ungültiges Passwort oder Username'
        } else {
          this.errorMessage = ''
        }
      } catch (error) {
        console.error('Login error:', error)
        this.errorMessage = 'An unexpected error occurred. Please try again.'
      }
    },
  },
}
</script>

<style scoped>
.error {
  color: var(--clr-red);
  background-color: #f8d7da;
  padding: 10px;
  margin-top: 4rem;
  text-align: center;
}

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
  button {
    align-self: flex-end;
    margin-top: 10px;
    font-size: 1rem;
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
  button {
    align-self: flex-end;
    margin-top: 10px;
    font-size: 1.1rem;
    padding-block: 0.5rem;
  }
}

@media (min-width: 1280px) {
  form {
    font-size: 1.2rem;
    margin-left: 5rem;
  }
  button {
    align-self: flex-end;
    margin-top: 10px;
    font-size: 1.1rem;
    padding-block: 0.5rem;
  }
}
</style>
