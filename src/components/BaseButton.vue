<template>
  <v-btn
    :rounded="buttonRoundedSize"
    class="h-auto py-1 px-3 text-white bg-red font-weight-bold"
    :class="customClass"
  >
    {{ text }}
  </v-btn>
</template>

<script setup>
// imports
import { ref, defineProps, computed } from "vue";

// props
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  customClass: {
    type: String,
    default: "",
  },
  roundedValue: {
    type: Boolean,
    default: false,
  },
});

// computed
const buttonRoundedSize = computed(() => {
  return props.roundedValue ? "lg" : "xl";
});

</script>

<style lang="scss">
.v-btn {
  font-size: 11px;
}
</style>