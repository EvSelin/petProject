<template>
  <div class="base-heading text-grey-lighten-2" :class="props.custom">
    <slot />
  </div>
</template>

<script setup>
// imports
import { ref, defineProps } from "vue";

// props
const props = defineProps({
  custom: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

</script>

<style lang="scss">
.base-heading {
  h2 {
    margin-bottom: 5px;
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }
}
</style>