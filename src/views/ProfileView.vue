<template>
  <PageHeader :headerText="'Profile'" />
  <form>
    <div class="form-group">
      <label for="current-username">Current Username</label>
      <input v-model="currentUsername" type="text" id="current-username" />
      <label for="new-username">New Username</label>
      <input v-model="newUsername" type="text" id="new-username" />
      <MainButton :text="'Save'" />
    </div>
    <div class="form-group">
      <label for="current-password">Current Password</label>
      <input v-model="currentPassword" id="current-password" type="text" />
      <label for="new-password">New Password</label>
      <input v-model="newPassword" id="new-password" type="text" />
      <MainButton :text="'Save'" />
    </div>
  </form>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  data() {
    return {
      currentUsername: '',
      newUsername: '',
      currentPassword: '',
      newPassword: '',
    }
  },
  components: { MainButton, PageHeader },
}
// und jetzt fehlt noch eine Methode :)
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 5%;
  max-width: 400px;
  margin: auto;
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

input,
label {
  margin: 0.1em 0;
}

#current-username {
  margin-bottom: 15px;
}

#current-password {
  margin-bottom: 15px;
}

@media (max-width: 480px) {
  form {
    padding: 1em;
    padding-inline: 2rem;
  }

  input,
  label {
    font-size: 0.9em;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  form {
    padding: 2em;
  }

  input,
  label {
    font-size: 1em;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  form {
    padding: 2.5em;
  }

  input,
  label {
    font-size: 1.1em;
    margin: 0.2em 0;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media (min-width: 1280px) {
  form {
    padding: 3em;
  }

  input,
  label {
    font-size: 1.2em;
    margin: 0.3em 0;
  }
  button {
    width: 50%;
    align-self: flex-end;
    margin-top: 10px;
  }
}
</style>
