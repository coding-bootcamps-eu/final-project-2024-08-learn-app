<template>
  <page-header class="page-header" headerText="Karteikarten" subheaderText="Wähle ein Kategorie oder erstelle eine eigene"/>
  <div class="category-list">
    <div class="category-item" v-for="category in categories" :key="category.id">
      <span>{{ category.name }}</span>
      <div class="actions">
        <router-link to="/test">Testen</router-link>
        <span>|</span>
        <router-link to="/learn">Lernen</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader,
  },
  name: 'CategoryList',
  data() {
    return {
      categories: [
        { id: 1, name: 'HTML & CSS' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: 'Web Apps' },
        { id: 4, name: 'VueJS' },
        { id: 5, name: 'Rest APIs' }
      ]
    };
  },
}
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80vw;
  margin: auto;
  margin-top: 3rem;
  background-color: rgb(239, 234, 234);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px lightgray;
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
  width: 25rem;
  margin-left: 3rem;
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
  width: 25rem;
  margin-left: 3rem;
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
  width: 25rem;
  margin-left: 3rem;
  margin-top: 3rem;
  background-color: rgb(239, 234, 234);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px lightgray;
}
}
</style>
