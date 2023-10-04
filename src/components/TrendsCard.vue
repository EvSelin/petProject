<template>
  <div class="trends-card bg-white text-center py-6 px-5">
    <h4 class="text-grey-lighten-2">{{ title }}</h4>
    <span class="amount text-primary transition-slow font-weight-bold">{{
      amount
    }}</span>
  </div>
</template>

<script setup>
// imports
import { ref, defineProps } from "vue";

// props
const props = defineProps({
  title: String,
  amount: Number,
});
</script>

<style lang="scss">
.trends-card {
  border-bottom: 1px solid #dfe0eb;

  &:last-child {
    border-bottom: 0;
  }
}

.amount {
  font-size: 24px;
}
</style>