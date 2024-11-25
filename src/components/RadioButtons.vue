<template>
  <div class="radio-container">
    <div class="radio-wrapper">
      <div class="add-edit">
        <input
          class="radio-button"
          type="radio"
          name="radio-button"
          id="radio-add"
          @change="$emit('radioAdd')"
          :checked="checked"
        />
        <label class="radio-label-left" for="radio-add">Karten hinzufügen </label>
      </div>

      <div class="add-edit">
        <input
          class="radio-button"
          type="radio"
          name="radio-button"
          id="radio-edit"
          @change="$emit('radioEdit')"
        />
        <label class="radio-label-right" for="radio-edit">Karten bearbeiten</label>
      </div>

      <!-- <div class="add-edit">
  <input
    class="radio-button"
    type="radio"
    name="radio-button"
    id="radio-import"
    @change="$emit('radioImport')"
  />
  <label class="radio-label-right" for="radio-edit">Karten importieren</label>
  </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    showRadios: {
      type: Boolean,
    },
    checked: {
      type: Boolean,
    },
  },
}
</script>

<style>
.radio-container {
  container-type: inline-size;
}
.radio-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-edit {
  padding: 1cqw 2cqw;
  display: flex;
  align-items: center;
  border: 0.4cqw solid var(--clr-green-dark);
  border-radius: 1cqw;
}

.radio-label-left,
.radio-label-right {
  color: var(--clr-green-dark);
  font-size: calc(0.25rem + (60 - 0.25) * ((100cqw - 200px) / (2000 - 200)));
  margin-left: 1.5cqw;
}

.radio-button {
  width: 2.5cqw;
  height: 2.5cqw;
  accent-color: var(--clr-green-dark);
}
.radio-button:focus{
  color:var(--clr-green-light);
  accent-color:var(--clr-green-light);
  outline: none;
  outline-width: 0;
  box-shadow: none;
  border: none;
}


@media (min-width: 768px) {
}
</style>
