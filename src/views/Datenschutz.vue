<template>
  <div class="datenschutz">
    <h1>Datenschmutz</h1>
    <p>
      Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. In dieser Datenschutzerklärung
      informieren wir Sie darüber, wie wir Ihre Daten erheben, verarbeiten und speichern.
    </p>

    <h2>1. Verantwortlicher</h2>
    <p>Verantwortlich für die Datenverarbeitung ist:</p>
    <address>
      <strong>Learnified</strong><br />
      Musterstraße 123<br />
      12345 Albertohausen<br />
      E-Mail: info@learnified.de<br />
      Telefon: +49 123 456789
    </address>

    <h2>2. Erhobene Daten</h2>
    <ul>
      <li>Persönliche Informationen (z. B. Name, E-Mail-Adresse)</li>
      <li>Technische Daten (z. B. IP-Adresse, Browsertyp)</li>
    </ul>

    <h2>3. Verwendung Ihrer Daten</h2>
    <p>Wir verwenden Ihre Daten, um:</p>
    <ul>
      <li>Ihnen unsere Dienste bereitzustellen</li>
      <li>Supportanfragen zu bearbeiten</li>
      <li>unsere Webseite zu verbessern</li>
    </ul>

    <h2>4. Ihre Rechte</h2>
    <p>Sie haben das Recht, jederzeit:</p>
    <ul>
      <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
      <li>die Berichtigung oder Löschung Ihrer Daten zu verlangen</li>
      <li>der Verarbeitung Ihrer Daten zu widersprechen</li>
    </ul>

    <p>
      Für weitere Informationen kontaktieren Sie uns bitte unter den oben genannten
      Kontaktmöglichkeiten.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Datenschutz',
}
</script>

<style scoped>
.datenschutz {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  color: var(--clr-green-dark);
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
  color: var(--clr-green);
}

address {
  font-style: normal;
  margin-top: 10px;
  line-height: 1.6;
}

ul {
  list-style: disc;
  padding-left: 20px;
}
</style>
