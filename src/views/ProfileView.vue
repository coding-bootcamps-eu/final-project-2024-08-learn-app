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
      <input v-model="inputCurrentPassword" id="current-password" type="password" />
      <label for="new-password">New Password</label>
      <input v-model="newPassword" id="new-password" type="text" />
      <MainButton :text="'Save'" />
    </div>
  </form>
  <div v-if="updateSuccess" class="success-message">Profil erfolgreich aktualisiert!</div>
  <div v-if="updateError" class="error-message">Das eingegebene Passwort ist falsch.</div>

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
    currentPassword() {
      return this.store.currentUser.password
    },
  },
  methods: {
    updateUserDetails() {

        if (this.inputCurrentPassword !== this.store.currentUser.password) {
        this.updateError = true;
        setTimeout(() => (this.updateError = false), 3000); 
        return;
      }


      if (this.newPassword && this.newPassword.length < 8) {
        alert('Das Passwort muss mindestens 8 Zeichen lang sein.')
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
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  form {
    font-size: 1rem;
    margin-left: 5rem;
    margin-right: 7rem;
  }


  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  form {
    font-size: 1.1rem;
    margin-left: 5rem;
  }

 
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 1280px) {
  form {
    font-size: 1.2rem;
    margin-left: 5rem;
  }

  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

.success-message {
  color: var(--clr-green-dark);
  background-color: var(--clr-green-light);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
}

.error-message {
  color: var(--clr-red);
  background-color: #f8d7da;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
}


</style>
