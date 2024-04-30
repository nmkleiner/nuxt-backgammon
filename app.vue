<template>
  <div>
    <!--    <button @click="gameStarted = !gameStarted">Start Game</button>-->
    <!--    <div class="main-container" v-if="gameStarted">-->
    <div class="main-container">
      <GameBoard />
    </div>
  </div>
</template>
<script setup lang="ts">
// const gameStarted = useState("gameStarted", () => false);
</script>
<style scoped lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
