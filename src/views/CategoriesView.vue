<template>
  <page-header class="page-header" headerText="Karteikarten" subheaderText="Wähle ein Kategorie oder erstelle eine eigene"/>
  <div class="category-list">
    <div class="category-item" v-for="category in store.categories" :key="category.id">
      <span>{{ category.title }}</span>
      <div class="actions">
        <router-link :to="'/test/'+ category.id">Testen</router-link>
        <span>|</span>
        <router-link :to="'/learn/'+ category.id">Lernen</router-link>
        <span>|</span>
        <router-link :to="'/quiz/'+ category.id">Quiz</router-link>
        <span>|</span>
        <router-link :to="'/addcard/' + category.id">Add Cards</router-link>
      </div>
    </div>
    <div class="category-item" >
      <span>Alle</span>
      <div class="actions">
        <router-link :to="'/test/'+ 'all'">Testen</router-link>
        <span>|</span>
        <router-link :to="'/learn/'+ 'all'">Lernen</router-link>
        <span>|</span>
        <router-link :to="'/quiz/'+ 'all'">Quiz</router-link>
        <span>|</span>
        <router-link :to="'/addCard'">Add Cards</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import { useUsersStore } from '@/stores/users.js'

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      store: useUsersStore(),
    };
  },
  created() {
    this.store.fetchCategories()
  },
}
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90vw;
  margin: auto;
  margin-top: 3rem;
  background-color: rgb(239, 234, 234);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px var(--clr-lightgray);
}

.category-item {
  display: flex;
  color: var(--clr-green-dark);
  justify-content: space-between;
  font-size: 1.2rem;
}

.actions {
  display: flex;
  color: var(--clr-green-dark);
  gap: 0.5rem;
  font-size: 1rem;
}

.actions a {
  background: none;
  border: none;
  color: var(--clr-green-dark);
  cursor: pointer;
  text-decoration: none;
}

.actions a:hover {
  text-decoration: underline;
}

@media (min-width: 481px) and (max-width: 768px) {
  .category-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  margin-left: 5rem;
  margin-top: 3rem;
  background-color: rgb(239, 234, 234);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px lightgray;
}
}
@media (min-width: 769px) and (max-width: 1279px) {
  .category-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  margin-left: 5rem;
  margin-top: 3rem;
  background-color: rgb(239, 234, 234);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px lightgray;
}
}

@media (min-width: 1280px) {
  .category-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  margin-left: 5rem;
  margin-top: 3rem;
  background-color: rgb(239, 234, 234);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px lightgray;
}
}
</style>
