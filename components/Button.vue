<template>
  <button v-text="text"></button>
</template>
<script setup lang="ts">
const { text } = defineProps<{ text: string }>();
</script>
<style scoped></style>
