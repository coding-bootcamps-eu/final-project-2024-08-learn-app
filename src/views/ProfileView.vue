<template>
  <PageHeader :headerText="'Login-Daten ändern'" />
  <form @submit.prevent="updateUserDetails">
    <div class="form-group">
      <label for="current-username">Current Username</label>
      <span id="current-username">{{ currentUsername }}</span>
      <label for="new-username">New Username</label>
      <input v-model="newUsername" type="text" id="new-username" />
      <MainButton :text="'Save'" />
    </div>
    <div class="form-group">
      <label for="current-password">Current Password</label>
      <span id="current-password">{{ currentPassword }}</span>
      <label for="new-password">New Password</label>
      <input v-model="newPassword" id="new-password" type="text" />
      <MainButton :text="'Save'" />
    </div>
  </form>
  <div v-if="updateSuccess" class="success-message">Profil erfolgreich aktualisiert!</div>
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
      newPassword: '',
      updateSuccess: false,
    }
  },
  components: { MainButton, PageHeader },
  computed: {
    currentUsername() {
      return this.store.currentUser.username
    },
    currentPassword() {
      return this.store.currentUser.password
    },
  },
  methods: {
    updateUserDetails() {
      if (this.newPassword && this.newPassword.length < 8) {
        alert('Das Passwort muss mindestens 5 Zeichen lang sein.')
        return
      }

      this.store.updateUserDetails(this.newUsername, this.newPassword)
      this.newUsername = ''
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
    margin-inline: 1rem;
    margin-top: 2rem;
  }

  input,
  label {
    font-size: 14px;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  form {
    margin-left: 3rem;
    margin-top: 3rem;
  }

  input,
  label {
    font-size: 16px;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  form {
    margin-left: 3rem;
    margin-top: 3rem;
  }

  input,
  label {
    font-size: 18px;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 1280px) {
  form {
    margin-left: 3rem;
    margin-top: 3rem;
  }

  input,
  label {
    font-size: 19px;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

.success-message {
  color: #156064;
  background-color: #00c49a;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
}
</style>
