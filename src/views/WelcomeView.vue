<template>
  <h1>Willkommen in unserer App! &#128522;</h1>
  <p>
    Mit dieser App kannst du dein Wissen in HTML&CSS sowie JavaScript als auch Vue.js testen und
    lernen. &#129504;<br /><br />Im Quiz kannst du Punkte ergattern und dich im Leaderboard mit
    anderen User_innen messen. 💪 <br /><br />
    Du kannst sogar selbst Karten hinzufügen und somit dein Wissen immer weiter vergrößern.
    &#129299;<br />
    <br />Viel Spaß damit! &#127881;
  </p>
</template>

<script></script>

<style scoped>
h1,
p {
  color: var(--clr-green-dark);
}

@media (max-width: 480px) {
  h1 {
    text-align: center;
    margin-top: 1rem;
    margin-inline: 1rem;
    font-size: 37px;
  }
  p {
    margin-top: 1.5rem;
    text-align: center;
    margin-inline: 2rem;
    font-size: 18px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-inline: 4rem;
    font-size: 40px;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    margin-inline: 4rem;
    font-size: 20px;
  }
}
@media (min-width: 769px) and (max-width: 1279px) {
  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-inline: 4rem;
    font-size: 45px;
  }
  p {
    margin-top: 2rem;
    text-align: center;
    margin-inline: 10rem;
    font-size: 23px;
    line-height: 29px;
  }
}
@media (min-width: 1280px) {
  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-inline: 4rem;
    font-size: 45px;
  }
  p {
    margin-top: 2rem;
    text-align: center;
    margin-inline: 20rem;
    font-size: 23px;
    line-height: 29px;
  }
}
</style>
