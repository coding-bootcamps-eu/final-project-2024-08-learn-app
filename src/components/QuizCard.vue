<template>
  <article class="quiz-container mt-1">
    <ul>
      <li
        v-for="(answer, index) in answers"
        :key="index"
        :class="{ correct: isCorrect(index), wrong: isWrong(index) }"
      >
        <input
          type="radio"
          :id="'answer' + index"
          name="answer"
          v-model="selectedAnswer"
          :value="index"
        />
        <label :for="'answer' + index">{{ answer }}</label>
      </li>
    </ul>
    <div class="result-check-container">
      <!-- Bedingung für den Button -->
      <button
        v-if="!answered"
        @click="submitAnswer"
        :disabled="selectedAnswer === null"
        class="submit-button"
      >
        Antwort überprüfen
      </button>
      <button v-if="!isLastQuestion && answered" @click="emitNext" class="next-button">
        Weiter
      </button>
      <p v-if="isLastQuestion && answered" class="final-message">
        Du hast alle Fragen beantwortet!
      </p>

      <p
        v-if="answered"
        :class="{ result: true, correct: isAnswerCorrect, wrong: !isAnswerCorrect }"
      >
        {{ isAnswerCorrect ? 'Richtig!' : 'Falsch!' }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    answers: {
      type: Array,
      required: true,
    },
    rightAnswer: {
      type: Number,
      required: true,
    },
    isLastQuestion: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedAnswer: null,
      answered: false,
    };
  },
  computed: {
    isAnswerCorrect() {
      return this.selectedAnswer === this.rightAnswer;
    },
  },
  watch: {
    answers() {
      this.resetState();
    },
    rightAnswer() {
      this.resetState();
    },
  },
  methods: {
    submitAnswer() {
      this.answered = true;
    },
    emitNext() {
      // Event mit dem korrekten Status der Antwort senden
      this.$emit("next", this.isAnswerCorrect);
    },
    isCorrect(index) {
      return this.answered && index === this.rightAnswer;
    },
    isWrong(index) {
      return this.answered && index === this.selectedAnswer && index !== this.rightAnswer;
    },
    resetState() {
      // Zurücksetzen der Antwort und des Status
      this.selectedAnswer = null;
      this.answered = false;
    },
  },
};
</script>


<style scoped>
.quiz-container {
  background-color: var(--clr-white);
  border-radius: 0.25rem;
  width: 100%;
}

ul {
  padding-block: 1rem;
  padding-right: 1rem;
}

label {
  color: var(--clr-black);
  font-size: 1rem;
}

li {
  list-style: none;
  display: flex;
  align-items: center;
}

li + li {
  margin-top: 1rem;
}

input {
  margin-left: 1rem;
}

input[type='radio'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid var(--clr-green-dark);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  margin-right: 1.5rem;
}

input[type='radio']:checked {
  background-color: var(--clr-green-dark);
  border-color: var(--clr-green-dark);
}

.result-check-container {
  display: flex;
  padding-inline:1rem;
  padding-bottom:  0.75rem ;
  justify-content: space-between;
  align-items: center;
}

.submit-button {
  padding: 0.5rem 1rem;
  background-color: var(--clr-green-dark);
  color: var(--clr-white);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: var(--clr-lightgray);
  cursor: not-allowed;
}

.correct {
  color: var(--clr-green-light);
}

.wrong {
  color: var(--clr-orange);
}

.result {
  font-size: 1.2rem;
}

li:has(input:checked) {
  /* Standard-Styling für die ausgewählte Antwort */
  font-weight: bold;
}

li.correct:has(input:checked) label {
  /* Styling für eine richtige Antwort */
  color: var(--clr-green-light);
  font-weight: bold;
}

li.wrong:has(input:checked) label {
  /* Styling für eine falsche Antwort */
  color: var(--clr-orange);
  font-weight: bold;
}

/* Optional: Styling für die richtige Antwort, wenn sie nicht ausgewählt wurde */
li.correct label{
  color: var(--clr-green-light);
}

.next-button {
  padding: 0.5rem 1rem;
  background-color: var(--clr-green-dark);
  color: var(--clr-white);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.next-button:hover {
  background-color: var(--clr-green-light);
}

.final-message {
  color: var(--clr-lightgray);
  font-size: 1rem;
}
</style>
