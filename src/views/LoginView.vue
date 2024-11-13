<template>
  <PageHeader header-text="Login" />
  <form>
    <div class="form-group">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" id="password" type="text" />
    </div>
    <MainButton :text="'Save'" />
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
  padding: 2rem;
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
  margin: 0.2rem 0;
}

@media (max-width: 480px) {
  form {
    padding: 1rem;
    padding-inline: 2rem;
  }

  input,
  label {
    font-size: 0.9rem;
  }

  button {
    width: 50%;
    align-self: flex-end;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  form {
    padding: 2rem;
  }

  input,
  label {
    font-size: 1rem;
  }

  button {
    width: 50%;
    align-self: flex-end;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  form {
    padding: 2.5rem;
  }

  input,
  label {
    font-size: 1.1rem;
    margin: 0.2rem 0;
  }

  button {
    width: 50%;
    align-self: flex-end;
  }
}

@media (min-width: 1280px) {
  form {
    padding: 3rem;
  }

  input,
  label {
    font-size: 1.2rem;
    margin: 0.3rem 0;
  }

  button {
    width: 50%;
    align-self: flex-end;
  }
}
</style>
