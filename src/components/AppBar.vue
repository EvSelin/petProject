<template>
  <v-app-bar color="bg-grey-lighten-3 py-5" flat="false" class="position-static w-100	mb-6">
    <v-app-bar-title>
      <base-heading>
        <h2 class="text-primary">{{ baseTitle }}</h2>
      </base-heading>
    </v-app-bar-title>
    <v-hover
      v-slot="{ isHovering, props }"
      v-for="[icon, cClass] in icons"
      :key="icon"
    >
      <v-btn
        icon
        class="text-grey-lighten-5"
        v-bind="props"
        :elevation="isHovering ? 2 : 0"
        :class="{ 'on-hover': isHovering }"
        size="43"
      >
        <v-icon :class="cClass">{{ icon }}</v-icon>
      </v-btn>
    </v-hover>
    <v-divider class="bg-grey-lighten-4 mx-4" vertical />
    <v-card
      class="text-primary"
      :class="cardClass"
      density="compact"
      :append-avatar="avatar"
      :title="props.title"
      variant="text"
    />
  </v-app-bar>
</template>

<script setup>
// imports
import { ref, watch, defineProps } from "vue";
import BaseHeading from "@/components/BaseHeading.vue";

// props
const props = defineProps({
  title: String,
  icons: Array,
  avatar: String,
  cardClass: String,
  baseTitle: String,
  appendAvatar: String,
});
</script>

<style lang="scss" scoped>
.v-btn {
  font-size: 12px;
}
</style>