<template>
  <div class="board-cell"></div>
</template>
<script setup lang="ts">
import type { Cell } from "~/entities/cell";

defineProps<{ cell: Cell }>();
</script>
<style scoped lang="scss">
@import "../assets/globals";

.board-cell {
  border-left: calc($factor * $half-cell-width) solid transparent;
  border-right: calc($factor * $half-cell-width) solid transparent;
  border-bottom: calc($factor * $cell-height) solid red;
}
</style>
