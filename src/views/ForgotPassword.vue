<template>
  <p>
    Du hast dein Passwort vergessen? Oops, da können wir dir momentan leider noch nicht
    weiterhelfen. ;) Du kannst aber einen neuen Account erstellen.
  </p>
</template>

<style scoped>
h1,
p {
  color: var(--clr-green-dark);
}

@media (max-width: 480px) {
  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-inline: 1rem;
    font-size: 37px;
  }
  p {
    margin-top: 1rem;
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
