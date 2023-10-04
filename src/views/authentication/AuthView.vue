<template>
  <div class="auth-view bg-grey-darken-5">
    <v-container>
      <LogIn />
    </v-container>
  </div>
</template>

<script setup>
// imports
import { ref, watch } from "vue";
import LogIn from "@/components/authentication/LogIn.vue";

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