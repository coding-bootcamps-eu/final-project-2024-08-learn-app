<template>
  <section class="add-card-wrapper">
    <h1>{{ cardHeader }}</h1>
    <textarea
      class="text-input"
      name="text-input"
      id="text-area"
      cols="50"
      rows="8"
      :placeholder="placeholder"
      :v-model="areaText"
    ></textarea>
  </section>
</template>

<script>
export default {
  data() {
    return {
      btnTxt01: 'nehmen',
      btnTxt02: 'verwerfen',
    }
  },

  props: {
    cardHeader: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    areaText: {
      type: String,
    },
  },
}
</script>

<style scoped>

textarea::placeholder{
  color:var(--clr-green-dark)
}

.text-input {
  resize: none;
  outline-color: var(--clr-green-dark);
  border-color: var(--clr-green-dark);
  padding: 0.5rem;
  font-size: clamp(0.1rem, 0.75rem + 0.25cqw, 1.5rem);
  font-family: Arial, Helvetica, sans-serif;
  color:var(--clr-green-dark)
}

.add-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  aspect-ratio: 10/6;
  padding: 4%;
  border: 3px solid var(--clr-green-dark);
  color: white;
  background-color: var(--clr-green-dark);
}

h1 {
  align-self: flex-start;
  font-size: clamp(2rem, 1.25rem + 0.6cqw, 4rem);
  margin-bottom: 5%;
  margin-top: 1%;
}

p,
.rlink {
  font-size: 0.75rem;
  margin-bottom: 10%;
}

.form-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'one two';
}

.rlink-right {
  justify-self: end;
  grid-area: two;
}

.rlink-left {
  justify-self: start;
  grid-area: one;
}
</style>
