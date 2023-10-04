<template>
  <v-dialog v-model="dialog" activator="parent" width="100%" max-width="380px">
    <v-card class="rounded-lg py-10 px-5">
      <logo-base> </logo-base>
      <base-heading> </base-heading>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BaseHeading from "@/components/Heading.vue";
import LogoBase from "@/components/LogoBase.vue";

export default {
  components: {
    BaseHeading,
    LogoBase,
  },
  name: "log-modal",
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>