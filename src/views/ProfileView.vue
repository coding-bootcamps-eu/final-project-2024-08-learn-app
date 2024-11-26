<template>
  <PageHeader :headerText="'Login-Daten ändern'" />

  <!-- Username Update Form -->
  <form @submit.prevent="updateUsername">
    <div class="form-group">
      <label for="current-username">Current Username</label>
      <span id="current-username">{{ currentUsername }}</span>
      <label for="new-username">New Username</label>
      <input v-model="newUsername" type="text" id="new-username" minlength="5" required />
      <MainButton :text="'speichern'" />
    </div>
  </form>

  <!-- Password Update Form -->
  <form @submit.prevent="updatePassword">
    <div class="form-group">
      <label for="current-password">Current Password</label>
      <input v-model="inputCurrentPassword" id="current-password" type="password" />
      <label for="new-password">New Password</label>
      <input v-model="newPassword" id="new-password" type="password" minlength="8" required />
      <MainButton :text="'speichern'" />
    </div>
  </form>

  <div v-if="updateSuccess" class="success">Profil erfolgreich aktualisiert!</div>
  <div v-if="updateError" class="error">Das eingegebene Passwort ist falsch.</div>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useUsersStore } from '@/stores/users.js'

export default {
  data() {
    const store = useUsersStore()
    return {
      store,
      newUsername: '',
      inputCurrentPassword: '',
      newPassword: '',
      updateSuccess: false,
      updateError: false,
    }
  },
  components: { MainButton, PageHeader },
  computed: {
    currentUsername() {
      return this.store.currentUser.username
    },
  },
  methods: {
    updateUsername() {
      const trimmedUsername = this.newUsername.trim()

      if (!trimmedUsername || /\s/.test(this.newUsername)) {
        alert('Der Benutzername darf keine Leerzeichen enthalten und nicht leer sein.')
        return
      }

      this.store.updateUserDetails(trimmedUsername, null)
      this.newUsername = ''
      this.updateSuccess = true
      setTimeout(() => (this.updateSuccess = false), 3000)
    },

    updatePassword() {
      const trimmedPassword = this.newPassword.trim()

      if (this.inputCurrentPassword !== this.store.currentUser.password) {
        this.updateError = true
        setTimeout(() => (this.updateError = false), 3000)
        return
      }

      if (!trimmedPassword || /\s/.test(this.newPassword)) {
        alert('Das Passwort darf keine Leerzeichen enthalten und nicht leer sein.')
        return
      }

      this.store.updateUserDetails(null, trimmedPassword)
      this.inputCurrentPassword = ''
      this.newPassword = ''
      this.updateSuccess = true
      setTimeout(() => (this.updateSuccess = false), 3000)
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

span {
  display: inline-block;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  min-width: 200px;
  min-height: 30px;
}

input {
  min-height: 30px;
}

.form-group {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}

#current-username {
  margin-bottom: 15px;
}

#current-password {
  margin-bottom: 15px;
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
    font-size: 1rem;
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

.success {
  color: var(--clr-green-dark);
  background-color: var(--clr-green-light);
  padding: 10px;
  margin-bottom: 15px;
  text-align: center;
}

.error {
  color: var(--clr-red);
  background-color: #f8d7da;
  padding: 10px;
  margin-bottom: 15px;
  text-align: center;
}
</style>
