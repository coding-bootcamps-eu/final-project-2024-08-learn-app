<template>
  <div class="contact-container">
    <header class="contact-header">
      <h1>Kontakt</h1>
    </header>
    <main class="contact-content">
      <section>
        <h2>Kontaktinformationen</h2>
        <p>Sie haben Fragen oder Anregungen? Kontaktieren Sie uns über die folgenden Kanäle:</p>
        <address>
          <strong>Learnified</strong><br />
          Musterstraße 123<br />
          12345 Albertohausen<br />
          E-Mail: <a href="mailto:info@learnified.de">info@learnified.de</a><br />
          Telefon: +49 123 456789
        </address>
      </section>

      <section>
        <h2>Kontaktformular</h2>
        <p>Alternativ können Sie uns auch über das folgende Formular erreichen:</p>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Ihr Name</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <label for="email">Ihre E-Mail-Adresse</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="E-Mail-Adresse"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Ihre Nachricht</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Nachricht"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Nachricht senden</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Kontakt',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      alert(`Danke, ${this.formData.name}! Ihre Nachricht wurde gesendet.`)
      /* FORMULAR WIRD ZURÜCKGESETZT */
      this.formData = {
        name: '',
        email: '',
        message: '',
      }
    },
  },
}
</script>

<style scoped>
.contact-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.contact-header h1 {
  color: var(--clr-green-dark);
  text-align: center;
  margin-bottom: 20px;
}

.contact-content h2 {
  margin-top: 20px;
  color: var(--clr-green);
}

.contact-content p,
.contact-content ul {
  line-height: 1.6;
}

address {
  font-style: normal;
  line-height: 1.6;
}

form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

textarea {
  resize: vertical;
}

.submit-button {
  background-color: var(--clr-green-dark);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: var(--clr-green);
}
</style>
