<template>
    <section class="card">
            <p class="hover-to-flip">Hover over the card to flip!</p>
            <section class="card-inner">
                <section class="card-front">
                    <h1>Card Front</h1>
                </section>
                <section class="card-back">
                    <h2>Card Back</h2>
                </section>
            </section> 
            <div class="btn-container">
                <main-button/>
                <main-button/>
            </div>
        </section>
</template>

<script>
import MainButton from '@/components/MainButton.vue';
export default {
    components: {
        MainButton
    }
};
</script>

<style scoped>
 main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-size: 3rem;
  }
  

  .card {
    position: relative;
    aspect-ratio: 10 / 7;
    height: 400px;
    perspective: 1000px;
  }
  
  .card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
  }
  
  .card:hover .card-inner {
    transform: rotateY(180deg);
  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 5px;
    margin: 0;
    overflow: hidden;
    transition: z-index 0s ease;
  }
  
  .card-front {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-lightblue);
    border: 1px solid var(--clr-black);
  }
  
  .card-back {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-lightgreen);
    color: var(--clr-black-09);
    transform: rotateY(180deg);
    z-index: 1;
    box-sizing: border-box;
    transition: z-index 0.8s ease;
    border: 1px solid var(--clr-black);
  }
  
  .card:hover .card-back {
    z-index: 2;
  }
  
  .card:hover .card-front {
    z-index: 1;
  }

  .hover-to-flip {
    position: absolute;
    top: -2rem;
    color: var(--color-red);
    font-weight: bold;
  }

  .card:hover .hover-to-flip {
    visibility: hidden;
  }

  .btn-container {
    position: absolute;
    bottom: -4rem;
    width: 100%;
    display: flex;
    visibility: hidden;
  }

  button {
    padding: .75rem 2.25rem;
    border-radius: .25rem;
    border: none;
    color: var(--clr-white);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .right {
    background-color: var(--color-green);
  }

  .wrong {
    background-color: var(--clr-light-red);
    margin-left: auto;
  }

  .card:hover .btn-container {
    visibility: visible;
  }
</style><template>
    <section class="card">
            <p class="hover-to-flip">Hover over the card to flip!</p>
            <section class="card-inner">
                <section class="card-front">
                    <h1>Card Front</h1>
                </section>
                <section class="card-back">
                    <h2>Card Back</h2>
                </section>
            </section> 
            <div class="btn-container">
                <main-button text="Richtig" colors="lightgreen"/>
                <main-button text="Falsch" colors="orange"/>
            </div>
        </section>
</template>

<script>
import MainButton from '@/components/Main Button.vue';
export default {
    components: {
        MainButton
    }
};
</script>

<style scoped>
 main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-size: 3rem;
  }
  

  .card {
    position: relative;
    aspect-ratio: 10 / 7;
    height: 400px;
    perspective: 1000px;
  }
  
  .card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
  }
  
  .card:hover .card-inner {
    transform: rotateY(180deg);
  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 5px;
    margin: 0;
    overflow: hidden;
    transition: z-index 0s ease;
  }
  
  .card-front {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--clr-black);
  }
  
  .card-back {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
    z-index: 1;
    box-sizing: border-box;
    transition: z-index 0.8s ease;
    border: 1px solid var(--clr-black);
  }
  
  .card:hover .card-back {
    z-index: 2;
  }
  
  .card:hover .card-front {
    z-index: 1;
  }

  .hover-to-flip {
    position: absolute;
    top: -2rem;
    color: var(--color-red);
    font-weight: bold;
  }

  .card:hover .hover-to-flip {
    visibility: hidden;
  }

  .btn-container {
    position: absolute;
    bottom: -4rem;
    width: 100%;
    display: flex;
    visibility: hidden;
  }

  button {
    padding: .75rem 2.25rem;
    border-radius: .25rem;
    border: none;
    color: var(--clr-white);
    font-size: 1.25rem;
    font-weight: bold;
  }
  </style>