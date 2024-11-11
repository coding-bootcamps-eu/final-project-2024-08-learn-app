<template>
  <form>
    <div class="form-group">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" id="password" type="text" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
}
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

@media (max-width: 480px) {
  form {
    padding: 1em;
    padding-inline: 2rem;
  }

  input,
  label {
    font-size: 0.9em;
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
}
</style>
