<template>
  <div class="board-container">
    <section class="leader-board-wrapper">
      <h1 class="leader-header">{{ leaderBoardHeader }}</h1>
      <table>
        <thead>
          <tr>
            <th>Platz</th>
            <th>Name</th>
            <th>Punkte</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(leader, index) in boardLeaders"
            :key="leader.name"
            :class="{ top1: index === 0, top2: index === 1, top3: index === 2 }"
          >
            <td class="tab-num">
              <span v-if="index === 0">🥇</span>
              <span v-else-if="index === 1">🥈</span>
              <span v-else-if="index === 2">🥉</span>
              <span v-else>{{ index + 1 }}</span>
            </td>
            <td class="tab-name">{{ leader.name }}</td>
            <td class="tab-points">{{ leader.punkte }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardLeaders: [
        { name: 'King of Kotelett🥩', punkte: 1000 },
        { name: 'Herbert Maier', punkte: 940 },
        { name: 'Herbert Mayer', punkte: 900 },
        { name: 'Elfriede Schmidt', punkte: 890 },
        { name: 'Siegfried Maier', punkte: 750 },
        { name: 'Kevin Schmidt', punkte: 750 },
        { name: 'Peter Maffel', punkte: 700 },
        { name: 'Marianne Rosenzwerg', punkte: 600 },
        { name: 'Maria Hellweg', punkte: 500 },
        { name: 'Margot Hohenegger', punkte: 400 },
      ],
    }
  },
  props: {
    leaderBoardHeader: {
      type: String,
      default: 'Leaderboard',
    },
  },
}
</script>

<style scoped>
.board-container {
  display: flex;
  justify-content: center;
}

.leader-board-wrapper {
  width: 100%;
  max-width: 800px;
  background-color: #f7f9fc;
  border: 3px solid var(--clr-green-dark);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.leader-header {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: var(--clr-green-dark);
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  background-color: var(--clr-green-dark);
  color: white;
}

tbody tr {
  transition: background-color 0.3s ease;
  background-color: rgba(0, 128, 0, 0.1);
}

/* tbody tr:hover {
  background-color: rgba(0, 128, 0, 0.1);
} */

tbody tr:nth-child(even) {
  background-color: #dcdada;
}

tbody tr td {
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}

.tab-num {
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
}

.tab-name {
  text-align: center;
  font-size: 1.3rem;
}

.tab-points {
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
}

.top1 .tab-name {
  font-weight: bold;
  color: gold;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.9);
}

.top2 .tab-name {
  font-weight: bold;
  color: rgb(149, 147, 147);
}

.top3 .tab-name {
  font-weight: bold;
  color: brown;
}

/* MOBIL SIZE */
@media (max-width: 480px) {
  table {
    font-size: 0.8rem;
  }

  .leader-header {
    font-size: 1.2rem;
  }
}
</style>
