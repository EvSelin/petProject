<template>
  <v-app id="inspire">
    <v-navigation-drawer class="bg-grey-darken-5">
      <v-sheet color="grey-lighten-4 bg-grey-darken-5" class="pa-4">
        <base-logo :isActive="true" :size="32" />
      </v-sheet>
      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
        />
      </v-list>
    </v-navigation-drawer>
    <v-main class="pt-0">
      <v-container class="py-0 px-4" fluid>
        <app-bar
          :baseTitle="'Overview'"
          :avatar="'user-01.jpg'"
          :title="'Jones Ferdinand'"
          :icons="icons"
          :cardClass="'custom-card'"
        />
      </v-container>
      <v-container class="py-0 px-8" fluid>
        <v-row>
          <v-col cols="12" sm="6" md="3" v-for="card in cards" :key="card">
            <info-card :title="card.title" :amount="card.amount" />
          </v-col>
        </v-row>
        <chart-block></chart-block>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// imports
import { ref } from "vue";
import BaseLogo from "@/components/BaseLogo.vue";
import AppBar from "@/components/AppBar.vue";
import InfoCard from "@/components/InfoCard.vue";
import ChartBlock from "@/components/ChartBlock.vue";

// variables
const links = ref([
  ["fa-solid fa-chart-pie", "Overview"],
  ["fa-solid fa-ticket", "Tickets"],
  ["fa-solid fa-lightbulb", "Ideas"],
  ["fa-solid fa-users", "Contacts"],
  ["fa-solid fa-user-tie", "Agents"],
  ["fa-solid fa-book", "Articles"],
  ["fa-solid fa-gear", "Settings"],
  ["fa-solid fa-award", "Subscription"],
]);

const icons = ref([
  ["fa-solid fa-magnifying-glass", ""],
  ["fa-solid fa-bell", "active-icon"],
]);

const cards = ref([
  {
    title: "Unresolved",
    amount: 60,
  },
  {
    title: "Overdue",
    amount: 16,
  },
  {
    title: "Open",
    amount: 43,
  },
  {
    title: "On hold",
    amount: 64,
  },
]);
</script>

<style lang="scss" scoped>
</style>