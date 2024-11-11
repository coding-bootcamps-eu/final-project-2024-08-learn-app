<template>
  <div>
    <p>Zurück</p>
    <p>Weiter</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
}
p {
  color: var(--clr-green-dark);
}

@media (min-width: 1280px) {
  div {
    margin-right: 30rem;
  }
}
</style>
