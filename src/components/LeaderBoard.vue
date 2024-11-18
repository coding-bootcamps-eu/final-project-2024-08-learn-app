<template>
  <div class="board-container" >
  <section class="leader-board-wrapper">
    <h1 class="leader-header">{{ leaderBoardHeader }}</h1>
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr v-for="(leader, index) in boardLeaders" :key="leader.name">
          <td v-if="index === 0" class="tab-num one">🧠🥇</td>
          <td v-if="index === 0" class="tab-name one">{{ leader.name }}</td>
          <td v-if="index === 0" class="tab-points one">{{ leader.punkte }}</td>
          <td v-if="index === 1" class="tab-num two">🧠🥈</td>
          <td v-if="index === 1" class="tab-name two">{{ leader.name }}</td>
          <td v-if="index === 1" class="tab-points two">{{ leader.punkte }}</td>
          <td v-if="index === 2" class="tab-num three">🧠🥉</td>
          <td v-if="index === 2" class="tab-name three">{{ leader.name }}</td>
          <td v-if="index === 2" class="tab-points three">{{ leader.punkte }}</td>
          <td v-if="index > 2" class="tab-num">{{ index + 1 }}. Platz</td>
          <td v-if="index > 2" class="tab-name">{{ leader.name }}</td>
          <td v-if="index > 2" class="tab-points">{{ leader.punkte }}</td>
        </tr>
      </tbody>
    </table>
    <h1></h1>
  </section>
  </div>
</template>


<style>
.board-container{
  container-type:inline-size;
}

.leader-board-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--clr-green-dark);
  background-color: rgb(245, 245, 245);
  border: 3px solid var(--clr-green-dark);
  padding: 3cqw;
  /* margin: 0 2vw 3vw 2vw; */
}

.leader-header {
  font-size: calc(1rem + (160 - 1) * ((100cqw - 200px) / (2000 - 200)));
  text-shadow: .5cqw .5cqw .5cqw gray;
  font-weight: 600;
  align-self: flex-start;
}

table {
  table-layout:fixed;
  font-size: calc(0.5rem + (88 - 0.5) * ((100cqw - 200px) / (2000 - 200)));
  border-spacing: 5cqw 4cqw;
}

.one,
.two,
.three {
  text-shadow:
    .7cqw .7cqw .5cqw gray,
    -0.1cqw -0.1cqw black,
    0.1cqw 0.1cqw black;
  font-weight: 800;
}

.one {
  color: gold;
}

.two {
  color: silver;
}

.three {
  color: brown;
}

.tab-name {
  width:48cqw;
  text-align: left;
}

.tab-points {
  text-align: right;
}


.tab-num {
  width: 19cqw;
  text-align: right;
}

@media (max-width: 480px) {
  .leader-board-wrapper {
    color: white;
    background-color: var(--clr-green-dark);
  }

  .leader-header{
    text-shadow: none;
  }
.three{
  color:burlywood;
}
  .one,
  .two,
  .three {
    text-shadow: none;
    font-weight: 600;
  }
}
</style>

<script>
export default {
  data() {
    return {
      boardLeaders: [
        { name: 'King of Kotelett🥩', punkte: '1000' },
        { name: 'Herbert Maier', punkte: '940' },
        { name: 'Herbert Mayer', punkte: '900' },
        { name: 'Elfriede Schmidt', punkte: '890' },
        { name: 'Siegfried Maier', punkte: '750' },
        { name: 'Kevin Schmidt', punkte: '750' },
        { name: 'Peter Maffel', punkte: '700' },
        { name: 'Marianne Rosenzwerg', punkte: '600' },
        { name: 'Maria Hellweg', punkte: '500' },
        { name: 'Margot Hohenegger', punkte: '400' },
      ],
    }
  },
  props: {
    leaderBoardHeader: {
      type: String,
    },

    targetLeft: {
      type: String,
    },
  },
}
</script>
