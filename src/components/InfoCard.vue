<template>
  <div class="info-card rounded-lg bg-white text-center py-6 px-5">
    <h3 class="text-grey-lighten-2">{{ title }}</h3>
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
.info-card {
  transition: all 0.4s ease-in-out;
  border: 1px solid #dfe0eb;

  &:hover,
  &.active {
    cursor: pointer;
    border: 1px solid #3751ff;

    * {
      color: #3751ff !important;
    }
  }

  * {
    transition: all 0.4s ease-in-out;
  }
}

.amount {
  font-size: 40px;
}
</style>