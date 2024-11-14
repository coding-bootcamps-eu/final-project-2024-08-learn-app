<template>
  <article class="quiz-container mt-1">
    <ul>
      <li>
        <input type="radio" name="answer" id="answer1" />
        <label for="answer1">Evan You</label>
      </li>
      <li>
        <input type="radio" name="answer" id="answer2" />
        <label for="answer2">Evan She</label>
      </li>
      <li>
        <input type="radio" name="answer" id="answer3" />
        <label for="answer3">Evan He</label>
      </li>
      <li>
        <input type="radio" name="answer" id="answer4" />
        <label class="radio-label" for="answer4">Evan We</label>
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  props: {
    answers: [],
  },
}
</script>

<style scoped>
.quiz-container {
  background-color: var(--clr-white);
  border-radius: 0.25rem;
  width: 100%;
  box-shadow: 0.25rem 0.25rem 0.5rem var(--clr-lightgray);
}

ul {
  padding-block: 1rem;
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
</style>
