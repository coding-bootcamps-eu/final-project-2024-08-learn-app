<template>
  <div class="category-list">
    <div class="category-item" v-for="category in categories" :key="category.id">
      <span>{{ category.name }}</span>
      <div class="actions">
        <a href="#">Testen</a>
        <span>|</span>
        <a href="#">Lernen</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  width: 25vw;
  margin-left: 5rem;
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
</style>
