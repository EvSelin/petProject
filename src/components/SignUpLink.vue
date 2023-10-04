<template>
  <div class="signup-holder text-grey-lighten-2 text-center">
    <p>
      Don’t have an account?
      <a href="#" class="text-blue">Sign up</a>
    </p>
  </div>
</template>

<script setup>
// imports
import { ref, defineProps } from "vue";
</script>

<style lang="scss">
.signup-holder {
  p,
  a {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>