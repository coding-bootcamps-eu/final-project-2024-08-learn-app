<template>
  <PageHeader
    class="page-header"
    :headerText="makeHeaderText"
    subheaderText="Bastel dir einfach Deine eigenen!"
  />
  <div class="home-view-wrapper">
    <h2 class="category-header">Deine aktuelle Kategorie: {{ actCategoryTitle }}</h2>
    <RadioButtons
      class="main-selector"
      :showRadios="true"
      @radioAdd="addMode"
      @radioEdit="editMode"
      @radioImport="importFile"
      :checked="true"
    />
    <QuestionCard
      :showRight="true"
      :showLeft="true"
      class="question-card"
      cardHeader="Frage"
      placeholder="Bitte eine Frage eingeben..."
      :showBtnLastCard="showPager"
      :showBtnNextCard="showPager"
      :showBtnDelCard="showDelCard"
      :cardText="questionText || questionInput"
      @inputText="getQuestion"
      @lastBtn="cardBack"
      @nextBtn="cardAhead"
      @delBtn="deleteCard"
    />
    <AnswersCard
      :showRight="true"
      :showLeft="true"
      class="answer-card"
      cardHeader="Antworten"
      placeholder="Bitte eine zur Frage passende Antwort eingeben..."
      :showBtnLastCard="showPager"
      :showBtnNextCard="showPager"
      :showBtnAddCard="showAddCard"
      :rightAnswerInput="rightAnswerText || rightAnswerInput"
      :answerOneInput="answerOneText || answerOneInput"
      :answerTwoInput="answerTwoText || answerTwoInput"
      :answerThreeInput="answerThreeText || answerThreeInput"
      :btnText="addButtonText"
      :isInActive="buttonInactive"
      @rightAnswerOutput="getRightAnswer"
      @answerOneOutput="getAnswerOne"
      @answerTwoOutput="getAnswerTwo"
      @answerThreeOutput="getAnswerThree"
      @addCard="addCard"
      @lastBtn="cardBack"
      @nextBtn="cardAhead"
    />
  </div>
</template>
<script>
import QuestionCard from '@/components/QuestionCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import AnswersCard from '@/components/AnswersCard.vue'
import RadioButtons from '@/components/RadioButtons.vue'
import { useUsersStore } from '@/stores/users'

export default {
  data() {
    return {
      cards: [],
      emptyString: '',
      //Variable für die Eingabe der Frage
      questionInput: '',
      //Variable für die Eingabe der richtigen Antwort
      rightAnswerInput: '',
      //Variablen für die Eingabe der restlichen Antwortmöglichkeit
      answerOneInput: '',
      answerTwoInput: '',
      answerThreeInput: '',
      //Variable für die Ausgabe der Frage
      questionText: '',
      //Variable für die Ausgabe der richtigen Antwort
      rightAnswerText: '',
      //Variable für die Ausgabe der restlichen Antwortmöglichkeit
      answerOneText: '',
      answerTwoText: '',
      answerThreeText: '',
      addButtonText: 'Karte hinzufügen',
      // buttonInactive: true,
      actCategoryTitle: '',
      actCategoryId: '',
      store: useUsersStore(),
      showPager: false,
      showAddCard: true,
      showDelCard: false,
      answerOk: false,
      questionOk: false,
      actIndex: 0,
      addModeFlag: true,
      editModeFlag: false,
      actCard: Object,
      qok: false,
      rok: false,
      a0ok: false,
      a1ok: false,
      a2ok: false,
    }
  },
  components: {
    QuestionCard,
    AnswersCard,
    PageHeader,
    RadioButtons,
  },
  computed: {
    // Text für den Page-Header
    makeHeaderText() {
      return 'Hallo ' + this.store.currentUser.username + '! Dir fehlen Karten? ✂️'
    },
    //Aktuelle Kategorie aus der URL holen
    categoryId() {
      return this.$route.params.id
    },
    //Buton hinzufügen /bearbeiten ausgrauen und nur anzeigen wenn in jedem Textfeld mindestens ein Buchstabe eingegeben wurde
    buttonInactive() {
      let result
      if (this.addModeFlag === true) {
        result = !(this.qok && this.rok && this.a0ok && this.a1ok && this.a2ok)
      } else {
        result = false
      }
      return result
    },
  },

  methods: {
    async deleteCard() {
      console.log(this.actCard.id)
      await this.store.deleteCard(this.actCard.id)
      this.clearCard()
      this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
      this.cards = this.currentCategory.cards
    },
    // Eingegebenen Fragetext speichern falls länger als 0
    getQuestion(txt) {
      if (txt.length > 0) {
        this.questionText = txt
        this.qok = true
      } else {
        this.qok = false
      }
      this.buttonInactive
    },
    // Eingegebenen Antworttext für die richtige Antwort speichern falls länger als 0
    getRightAnswer(txt) {
      if (txt.length > 0) {
        this.rightAnswerText = txt
        this.rok = true
      } else {
        this.rok = false
      }
      this.buttonInactive
    },
    // Eingegebenen Antworttext für die erste falsche Antwort speichern falls länger als 0
    getAnswerOne(txt) {
      if (txt.length > 0) {
        this.answerOneText = txt
        this.a0ok = true
      } else {
        this.a0ok = false
      }
      this.buttonInactive
    },
    // Eingegebenen Antworttext für die zweite falsche Antwort speichern falls länger als 0
    getAnswerTwo(txt) {
      if (txt.length > 0) {
        this.answerTwoText = txt
        this.a1ok = true
      } else {
        this.a1ok = false
      }
      this.buttonInactive
    },
    // Eingegebenen Antworttext für die dritte falsche Antwort speichern falls länger als 0
    getAnswerThree(txt) {
      if (txt.length > 0) {
        this.answerThreeText = txt
        this.a2ok = true
      } else {
        this.a2ok = false
      }
      this.buttonInactive
    },
    //Vorwärts und rückwärts Buttons einblenden/ausblenden
    showButtons(flag) {
      return flag
    },

    //Add Mode initialisieren
    addMode() {
      this.showDelCard = false
      this.showPager = false
      this.addButtonText = 'Karte hinzufügen'
      //Edit Mode ist gewählt
      this.editModeFlag = false
      //Add Mode abgewählt
      this.addModeFlag = true
      this.clearCard()
    },
    //Edit Mode initialisieren
    editMode() {
      this.clearCard()
      this.setupEditMode()
    },
    //Die aus der API geladenen Daten anzeigen und die vorherige Karte anzeigen
    cardBack() {
      this.actIndex--
      if (this.actIndex < 0) {
        this.actIndex = 0
      }
      this.actCard = this.cards[this.actIndex]
      this.questionInput = this.actCard.question
      this.getAnswers()
    },
    //Die aus der API geladenen Daten anzeigen und die nächste Karte anzeigen
    cardAhead() {
      this.actIndex++
      if (this.actIndex >= this.cards.length - 1) {
        this.actIndex = this.cards.length - 1
      }
      this.actCard = this.cards[this.actIndex]
      this.questionInput = this.actCard.question
      this.getAnswers()
    },
    //Alle Eingabe Textarea Felder leeren
    clearCard() {
      this.questionInput = null
      this.rightAnswerInput = null
      this.answerOneInput = null
      this.answerTwoInput = null
      this.answerThreeInput = null
      this.questionText = null
      this.rightAnswerText = null
      this.answerOneText = null
      this.answerTwoText = null
      this.answerThreeText = null
    },
    //Die boolschen Flags, die überwachen ob in einem Textfeld Text eingegeben wurde zurücksetzen
    resetFlags() {
      this.qok = false
      this.rok = false
      this.a0ok = false
      this.a1ok = false
      this.a2ok = false
    },
    // Die Antworten aus der API in die entsprechenden Textfelder schreiben
    getAnswers() {
      //Indices für korrekte Einsortierung der Antworten erstellen
      //Das in right answer gespeicherte Indice wird für die richtige
      //Antwort genutzt, die übrigen drei Indices werden im Array indices
      // gespeichert
      let indices = []
      for (let i = 0; i < 4; i++) {
        if (i !== this.actCard.rightAnswer) {
          indices.push(i)
        }
      }
      this.clearCard()
      // Textfeld für die richtige Antwort mit der richtigen Antwort füllen
      // Die übrigen Anworten werden mit den restlichen Indices von 0 bis 4
      // geholt und in die entsprechenden Textfelder geschrieben
      this.questionInput = this.actCard.question
      this.rightAnswerInput = this.actCard.answers[this.actCard.rightAnswer]
      this.answerOneInput = this.actCard.answers[indices[0]]
      this.answerTwoInput = this.actCard.answers[indices[1]]
      this.answerThreeInput = this.actCard.answers[indices[2]]
    },

    // Setup für den Edit Mode
    async setupEditMode() {
      this.showDelCard = true
      // vorwärts/rückwärts Buttons anzeigen
      this.showPager = true
      // Button Text anpassen
      this.addButtonText = 'Karte ändern'
      //Flags für den entsprechenden Modus setzen
      this.editModeFlag = true
      this.addModeFlag = false
      //Index für das Array in dem die API Daten liegen auf Null setzen
      this.actIndex = 0
      //Alle Karten der aktuellen Kategorie fetchen
      // Müssen aktualisiert werden, da eventuell
      //neue Karten hinzugefügt wurden
      //anschließend das Array aktualisieren, den Index für die
      //erste Karte setzen und Die FRage und Antworten in die Textareas schreiben
      this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
      this.cards = this.currentCategory.cards
      this.actCard = this.cards[this.actIndex]
      this.questionInput = this.actCard.question
      this.getAnswers()
    },
    // Die Hauptroutine, die die editierten/hinzugefügten Fragen und Antworten
    // auf die API zurückschreiben
    async addCard() {
      // Routinen für den add Modus
      if (this.addModeFlag === true) {
        //Indices für das zurückschreiben erstellen
        //Die richtige Antwort bekommt einen zufälligen Index
        //zugewiesen, die restlichen Indices werden in ein Array
        //gepusht
        let indices = []
        let rightIdice = Math.floor(Math.random() * 4)
        for (let i = 0; i < 4; i++) {
          if (i !== rightIdice) {
            indices.push(i)
          }
        }
        // Die Antworten in einem Array zwischenspeichern
        // dieses wird dann an das 'answers' Object übergeben
        let arr = []
        arr[rightIdice] = this.rightAnswerText
        arr[indices[0]] = this.answerOneText
        arr[indices[1]] = this.answerTwoText
        arr[indices[2]] = this.answerThreeText
        // neue Karte anlegen
        let newCardAdd = {
          //Funktion randomUUID für das Erstellen einer Id nutzen
          id: window.crypto.randomUUID(),
          categoryId: this.actCategoryId,
          question: this.questionText,
          answers: arr,
          //zufälliges Indice für die richtige Antwort
          rightAnswer: rightIdice,
        }
        //Erzeugte Karte in die API schreiben
        await this.store.addCard(newCardAdd)
        //Array mit allen gespeicherten Karten aktualisaieren
        this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
        this.cards = this.currentCategory.cards
        //Die TExtfelder leeren
        this.clearCard()
        //Die Textlängen Überwachungs boolschen Flags resetten
        this.resetFlags()
        // Routinen für den Edit Modus
      } else {
        // Indices für das Zurückschreiben der editierten Antworten erzeugen
        let indices = []
        for (let i = 0; i < 4; i++) {
          if (i !== this.actCard.rightAnswer) {
            indices.push(i)
          }
        }
        let arr = []
        arr[this.actCard.rightAnswer] = this.rightAnswerText || this.rightAnswerInput
        arr[indices[0]] = this.answerOneText || this.answerOneInput
        arr[indices[1]] = this.answerTwoText || this.answerTwoInput
        arr[indices[2]] = this.answerThreeText || this.answerThreeInput
        let newCardEdit = {
          id: this.actCard.id,
          categoryId: this.actCategoryId,
          question: this.questionText || this.questionInput,
          answers: arr,
          rightAnswer: this.actCard.rightAnswer,
        }
        await this.store.updateCard(this.actCard.id, newCardEdit)
        this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
        this.cards = this.currentCategory.cards
      }
    },
  },
  async created() {
    this.currentCategory = await this.store.fetchCategoryWithCards(this.categoryId)
    this.actCategoryTitle = this.currentCategory.title
    this.actCategoryId = this.currentCategory.id
    this.buttonInactive
  },
}
</script>

<style scoped>
.page-header {
  display: none;
}
.category-header {
  color: var(--clr-green-dark);
  font-size: 3vw;
  grid-area: pheader;
}

.main-selector {
  grid-area: 'radios';
}

.home-view-wrapper {
  padding: 0 5vw 5vw 5vw;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas: 'pheader' 'radios' 'question' 'answer';
  gap: 4vw;
}

.answer-card {
  grid-area: answer;
}

.question-card {
  grid-area: question;
}

@media (min-width: 768px) {
  .page-header {
    display: inline-block;
  }
  .category-header {
    color: var(--clr-green-dark);
    font-size: 1.8vw;
    grid-area: pheader;
  }
  .home-view-wrapper {
    padding-top: 1vw;
    padding-left: 5rem;
    padding-bottom: 2rem;
    justify-content: start;
    align-items: start;
    grid-template-columns: 40% 40%;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'pheader pheader' 'radios dummy' 'question answer ';
    gap: 1.5vw;
  }
}
</style>
