<template>
  <div>
    <router-link
      to="/"
      style="font-size: 25px; color: red; text-align: center; width: 100%"
      >Go to Home Page</router-link
    >
  </div>
</template>

<script>
import { ref } from "vue";
// import LogIn from "@/components/modals/LogIn.vue";

export default {
  data() {
    return {};
  },
  setup() {
    const init = ref({
      name: "",
      email: "",
      select: null,
    });

    const foo = () => {
      init.value.name = "Some example";
    };

    return {
      init,
      foo,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>