<template>
  <div class="impressum">
    <h1>Impressum</h1>
    <p>Angaben gemäß § 5 TMG:</p>
    <p>
      Jan Hobelson<br />
      Musterstraße 123<br />
      12345 Albertohausen<br />
      Telefonnummer: +49 123 456789<br />
      E-Mail: info@learnified.de<br />
    </p>
    <p>
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
      Jan Hobelson<br />
      Musterstraße 123<br />
      12345 Albertohausen<br />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Impressum',
}
</script>

<style scoped>
.impressum {
  padding: 20px;
  line-height: 1.6;
}

h1 {
  color: var(--clr-green-dark);
}
</style>
