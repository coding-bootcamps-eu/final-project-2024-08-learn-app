<template>
  <div class="card-container">
    <div class="card-wrapper">
      <section class="main-card">
        <h1>{{ cardHeader }}</h1>
        <textarea
          class="text-input"
          name="card-question"
          id="card-question"
          cols="2"
          rows="8"
          :placeholder="placeholder"
          :value="cardText"
          @input="$emit('inputText', $event.target.value)"
        ></textarea>
      </section>
      <div class="card-footer">
        <MainButton
          class="last-card"
          text="zurück"
          v-show="showBtnLastCard"
          @click="$emit('lastBtn')"
        />
        <MainButton
          class="next-card"
          text="weiter"
          v-show="showBtnNextCard"
          @click="$emit('nextBtn')"
        />
        <div class="add-edit" v-show="showRadios">
          <input
            class="radio-button"
            type="radio"
            name="radio-add"
            id="radio-add"
            @change="$emit('radioAdd')"
            :checked="checked"
          />
          <label class="radio-label-left" for="radio-add">Karten hinzufügen </label>
          <input
            class="radio-button"
            type="radio"
            name="radio-add"
            id="radio-edit"
            @change="$emit('radioEdit')"
          />
          <label class="radio-label-right" for="radio-edit">Karten bearbeiten</label>
        </div>
        <MainButton class="add-card" text="Karte hinzufügen" v-show="showBtnAddCard" />
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from './MainButton.vue'

export default {
  data() {
    return {}
  },
  computed: {},
  components: {
    MainButton,
  },
  props: {
    cardHeader: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    cardText: {
      type: String,
    },
    checked: { type: Boolean },
    showRadios: {
      type: Boolean,
    },

    showBtnAddCard: {
      type: Boolean,
    },

    showBtnLastCard: {
      type: Boolean,
    },

    showBtnNextCard: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>
textarea::placeholder {
  color: var(--clr-green-dark);
  opacity: 0.4;
}

.card-container {
  container-type: inline-size;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-input {
  resize: none;
  outline-color: var(--clr-green-dark);
  border-color: var(--clr-green-dark);
  border-radius: 0.5cqw;
  padding: 3cqw;
  font-size: calc(0.5rem + (80 - 0.5) * ((100cqw - 200px) / (2000 - 200)));
  font-family: Arial, Helvetica, sans-serif;
  color: var(--clr-green-dark);
}

.main-card {
  display: flex;
  flex-direction: column;
  aspect-ratio: 5/4;
  padding: 3cqw 5cqw 1cqw 5cqw;
  border: 3px solid var(--clr-green-dark);
  color: white;
  background-color: var(--clr-green-dark);
}

.card-footer {
  display: grid;
  grid-template-columns: 50cqw 50cqw;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'zurück  weiter' 'hinzu  karte';
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: calc(1rem + (100 - 1) * ((100cqw - 200px) / (2000 - 200)));
  margin-bottom: 3cqw;
  margin-top: 1cqw;
}

.radio-label-left,
.radio-label-right {
  margin-left: 2cqw;
  font-size: calc(0.3rem + (50 - 0.3) * ((100cqw - 200px) / (2000 - 200)));
}

.radio-label-right {
}

.radio-label-left {
  margin-left: 2cqw;
  margin-right: 4cqw;
}

.radio-button {
  transform: scale(2);
  accent-color: var(--clr-green-dark);
}

.next-card,
.last-card {
  font-size: calc(0.3rem + (25 - 0.3) * ((100cqw - 200px) / (2000 - 200)));
  margin-top: 1cqw;
  margin-bottom: 5cqw;
}

.add-card {
  font-size: calc(0.3rem + (50 - 0.3) * ((100cqw - 200px) / (2000 - 200)));
  margin-bottom: 5cqw;
}

.last-card {
  grid-area: zurück;
  justify-self: start;
}

.next-card {
  grid-area: weiter;
  justify-self: end;
}

.add-edit {
  padding: 1cqw 1cqw 1cqw 4cqw;
  display: flex;
  justify-items: flex-end;
  grid-area: hinzu;
  justify-self: start;
}

.add-card {
  grid-area: karte;
  justify-self: end;
}

@media (min-width: 768px) {
  .main-card {
    color: var(--clr-green-dark);
    background-color: rgb(245, 245, 245);
  }
  .next-card,
  .last-card,
  .add-card {
    color: var(--clr-green-dark);
    background-color: rgb(245, 245, 245);
    border: 0.25cqw solid var(--clr-green-dark);
  }

  .add-edit {
    color: var(--clr-green-dark);
    background-color: rgb(245, 245, 245);
    border: 0.25cqw solid var(--clr-green-dark);
    border-radius: 1cqw;
  }
}
</style>
