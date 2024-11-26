<template>
  <PageHeader :headerText="'Du brauchst ein Profil, um die App zu benutzen'" />
  <form @submit.prevent="handleRegister">
    <div class="form-group">
      <label for="username">Username wählen</label>
      <input v-model="username" type="text" id="username" minlength="5" />
    </div>
    <div class="form-group">
      <label for="password">Passwort wählen</label>
      <input v-model="password" id="password" type="password" minlength="8" required />
    </div>
    <div class="form-group">
      <label for="email">Email-Adresse</label>
      <input v-model="email" id="email" type="email" minlength="5" required />
    </div>
    <div class="button-class">
      <MainButton :text="'Registrieren'" type="submit" />
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
      email: '',
      password: '',
    }
  },
  components: { MainButton, PageHeader },
  methods: {
    async handleRegister() {
      const trimmedUsername = this.username.trim()
      const trimmedEmail = this.email.trim()
      const trimmedPassword = this.password.trim()

      // Validation checks
      if (!trimmedUsername || /\s/.test(this.username)) {
        alert('Der Benutzername darf keine Leerzeichen enthalten und nicht leer sein.')
        return
      }

      if (!trimmedPassword || /\s/.test(this.password)) {
        alert('Das Passwort darf keine Leerzeichen enthalten und nicht leer sein.')
        return
      }

      const newUser = {
        username: trimmedUsername,
        email: trimmedEmail,
        password: trimmedPassword,
      }

      const usersStore = useUsersStore()

      try {
        await usersStore.register(newUser)
        alert('Registrierung erfolgreich!')

        this.username = ''
        this.email = ''
        this.password = ''
      } catch (error) {
        alert('Registrierung fehlgeschlagen. Bitte versuche es erneut.')
        console.error(error)
      }
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
  justify-content: flex-end;
  align-content: center;
}

a {
  color: var(--clr-green-dark);
  text-decoration: none;
  font-style: italic;
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
  button {
    align-self: flex-end;
    margin-top: 10px;
    font-size: 1.1rem;
    padding-block: 0.5rem;
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
