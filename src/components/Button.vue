<template>
  <base-button :text="'Test'"></base-button>

  <div>
    <v-list-item
      :title="'Item '"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      :prepend-avatar="'https://randomuser.me/api/portraits/women/8.jpg'"
    ></v-list-item>
  </div>

  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon="fa-solid fa-ellipsis-vertical" v-bind="props"></v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "BaseButton",
};

const items = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];
</script>

<style lang="scss" scoped>
</style>