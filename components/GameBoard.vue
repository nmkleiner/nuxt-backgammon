<template>
  <div class="game-board">
    <div class="board-row flip mb">
      <BoardCell
        v-for="cell in gameStore.cells.regular.slice(0, 6)"
        :key="cell.index"
        :cell
      />
      <div class="space-for-partition"></div>
      <BoardCell
        v-for="cell in gameStore.cells.regular.slice(6, 12)"
        :key="cell.index"
        :cell
      />
    </div>
    <div class="partition">
      <!--      <BoardCell class="flip" />-->
      <!--      <BoardCell />-->
    </div>
    <div class="board-row">
      <BoardCell
        v-for="cell in gameStore.cells.regular.slice(12, 18)"
        :key="cell.index"
        :cell
      />
      <div class="space-for-partition"></div>
      <BoardCell
        v-for="cell in gameStore.cells.regular.slice(18)"
        :key="cell.index"
        :cell
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from "~/stores/game.store";

const gameStore = useGameStore();
gameStore.createCells();
</script>
<style scoped lang="scss">
@import "../assets/globals";
@import "../assets/global-classes";

.game-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 20px solid burlywood;

  .board-row {
    display: flex;

    &.flip {
      flex-direction: row-reverse;
    }

    &.mb {
      margin-bottom: $row-margin;
    }

    .space-for-partition {
      width: $half-cell-width * $factor * 2;
    }
  }

  .partition {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(($factor * 2 * $cell-height) + $row-margin);
    width: $half-cell-width * $factor * 2;
    background-color: burlywood;

    .board-cell {
      //display: none;
    }
  }
}
</style>
