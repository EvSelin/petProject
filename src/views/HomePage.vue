<template>
  <main-template />
</template>
<script setup>
import { ref, watch } from "vue";
import MainTemplate from "../components/MainTemplate.vue";

let test = ref(1);

const increment = () => test.value++;
const watchTest = watch(test, (prev, next) => {
  console.log(test.value);
  console.log(prev, next);
});
</script>

<style lang="scss" scoped>
.auth-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0;
}
</style>