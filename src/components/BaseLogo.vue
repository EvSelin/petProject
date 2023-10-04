<template>
  <div class="logo-holder" :class="{ 'alt-view': props.isActive }">
    <v-avatar :size="props.size">
      <v-img src="logo.svg" alt="Dashboard Kit"></v-img>
    </v-avatar>
    <h3 class="text-grey-lighten-1">Dashboard Kit</h3>
  </div>
</template>


<script setup>
// imports
import { ref, defineProps } from "vue";

// props
const props = defineProps({
  isActive: {
    type: Boolean,
    default: () => false,
  },
  size: {
    type: Number,
    default: 48,
  },
});
</script>
<style lang="scss" scoped>
.logo-holder {
  text-align: center;
  margin-bottom: 15px;

  .v-avatar {
    margin: 0 0 12px 0;
  }

  &.alt-view {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;

    .v-avatar {
      margin: 0 14px 0 0;
    }
  }
}
</style>