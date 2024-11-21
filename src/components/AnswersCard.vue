<template>
  <div class="card-container">
    <div class="card-wrapper">
      <form class="main-card">
        <h1>{{ cardHeader }}</h1>
        <textarea
          class="text-input right-answer"
          name="card-right"
          id="card-right"
          cols="2"
          rows="1"
          placeholder="richtige Antwort"
          :value="rightAnswerInput"
          @input="$emit('rightAnswerOutput', $event.target.value)"
        ></textarea>
        <textarea
          class="text-input"
          name="card-one"
          id="card-one"
          cols="2"
          rows="1"
          placeholder="Antwortmöglichkeit 1"
          :value="answerOneInput"
          @input="$emit('answerOneOutput', $event.target.value)"
        ></textarea>
        <textarea
          class="text-input"
          name="card-two"
          id="card-two"
          cols="2"
          rows="1"
          placeholder="Antwortmöglichkeit 2"
          :value="answerTwoInput"
          @input="$emit('answerTwoOutput', $event.target.value)"
        ></textarea>
        <textarea
          class="text-input"
          name="card-three"
          id="card-three"
          cols="2"
          rows="1"
          placeholder="Antwortmöglichkeit 3"
          :value="answerThreeInput"
          @input="$emit('answerThreeOutput', $event.target.value)"
        ></textarea>
      </form>
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
        <MainButton
          class="add-card"
          :class="{ 'is-inactive': isInActive }"
          :text="btnText"
          v-show="showBtnAddCard"
          @click="$emit('addCard')"
        />
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

    rightAnswerInput: {
      type: String,
    },

    answerOneInput: {
      type: String,
    },
    answerTwoInput: {
      type: String,
    },
    answerThreeInput: {
      type: String,
    },
    btnText: { type: String },
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

    isInActive: {
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
  margin-bottom: 4cqw;
  outline-color: var(--clr-green-dark);
  border-color: var(--clr-green-dark);
  border-radius: 0.5cqw;
  padding: 3cqw;
  font-size: calc(0.5rem + (80 - 0.5) * ((100cqw - 200px) / (2000 - 200)));
  font-family: Arial, Helvetica, sans-serif;
  color: var(--clr-green-dark);
}

.right-answer::placeholder {
  color: var(--clr-green-light);
  opacity: 0.4;
}

.right-answer {
  outline-color: var(--clr-green-light);
  border-color: var(--clr-green-light);
  color: var(--clr-green-light);
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

.add-card:hover {
  font-size: calc(0.3rem + (50 - 0.3) * ((100cqw - 200px) / (2000 - 200)));
  background-color: var(--clr-green-dark);
  color: white;
}

.add-card:active {
  font-size: calc(0.3rem + (50 - 0.3) * ((100cqw - 200px) / (2000 - 200)));
  background-color: var(--clr-green-dark);
  color: var(--clr-green-light);
}
.is-inactive {
  pointer-events: none;
  opacity: 0.2;
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
