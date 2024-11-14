<template>
  <PageHeader class="page-header" :headerText="`Hallo ${userName}! Dir fehlen Karten? ✂️` " subheaderText="Bastel Dir einfach Deine eignen..."/>
<div class="dd-container">
      <label for="dd-categories">Wähle Deine Kategorie</label>
      <select name="categories" id="dd-categories" class="select_category"><option value="act-category">HTML und CSS</option></select>
    </div>
  <section class="add-view-container">

    <section class="questioncards">
      <EditCard
        class="question-card"
        cardHeader="Frage"
        placeholder="Warum?"

      />
      <form class="form-buttons">
        <MainButton class="btn-design" text="nehmen" />
        <MainButton class="btn-design" text="verwerfen" />
      </form>
      <hr />
    </section>

    <section class="answercards">
      <EditCard
        class="answer-card"
        cardHeader="Antwort"
        placeholder="Darum!"
        :areaText="answerText"
      />

      <form class="form-buttons">
        <MainButton class="btn-design" text="nehmen" />
        <MainButton class="btn-design" text="verwerfen" />
      </form>
    </section>
  </section>

  <!-- </div> -->
</template>
<script>
import EditCard from '@/components/EditCard.vue'
import MainButton from '@/components/MainButton.vue'
import PageHeader from '@/components/PageHeader.vue';

export default {

  components: {
    EditCard,
    MainButton,
    PageHeader,
  },

}
</script>

<style scoped>
select{
  font-size: clamp(1rem, 1rem + 0.35cqw, 2rem);
  color:var(--clr-green-dark);
  border-color:var(--clr-green-dark);
}

label {
  font-size: clamp(1rem, 1rem + 0.35cqw, 2rem);
  margin-right: 0.5rem;
}

.dd-container {
  margin-top:1rem;
  display: flex;
  justify-content: center;
color:var(--clr-green-dark)
}

.btn-design {
  font-size: clamp(0.1rem, 0.5rem + 0.25cqw, 1.5rem);
}

.form-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  color:var(--clr-green-dark)
}

.add-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 3rem;
  gap: 7%;
}

.questioncards,
.answercards {
  max-width: 370px;
  min-width: 300px;
  margin-top: 2rem;
}

.card-container {
  margin: 2rem auto 2rem auto;
  font-size: 1rem;
}

.answer-card,
.question-card {
  color: white;
  background-color: var(--clr-green-dark);
}
.quiz-container {
  margin: 2rem auto 2rem auto;
  font-size: 1rem;
}

.last-used {
  font-size: 0.9rem;
  color: grey;
}
.last-tag {
  display: inline;
}
.menu {
  color: var(--clr-green-dark);
}

.kartei-wrapper,
.quiz-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

hr {
  margin-top: 1rem;
  border-color: lightgrey;
  border-width: 1px;
  width: 50%;
  margin: 3rem auto 1rem auto;
}

.page-header {
  display: none;
}

@media (min-width: 768px) {
  .add-view-container {
    flex-direction: row;
    justify-items: flex-start;
    align-items: flex-start;
    margin-right: 5rem;
  }
  .dd-container{
    justify-content: flex-start;
    margin-left:3rem;
  }
  .questioncards,
  .answercards {
    min-width: 338px;
    width: 500px;
    max-width: 500px;
    aspect-ratio: 10/6;
  }
  .answer-card,
  .question-card {
    background-color: white;
    color: var(--clr-green-dark);
  }

  hr {
    visibility: hidden;
  }

  .page-header {
    display: block;
    visibility: visible;
  }
}
</style>
