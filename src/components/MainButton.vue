<template>
    <button :class="colors">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: String,
        colors: {
            type: String,
            default: "green",
        }
    }
};

</script>

<style scoped>
button {
    padding: .75rem 2.25rem;
    border-radius: .25rem;
    border: none;
    color: var(--clr-white);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .green {
    background-color: var(--clr-green-dark);
    color: var(--clr-white);
  }

  .lightgreen {
    background-color: var(--clr-green-light);
  }

  .orange {
    background-color: var(--clr-orange);
  }
</style>