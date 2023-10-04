<template>
  <div
    class="chart-block rounded-lg bg-white my-7 overflow-hidden d-flex flex-wrap"
  >
    <div class="chart-holder">
      <base-chart />
    </div>
    <div class="cards-holder position-relative">
      <trends-card
        v-for="card in cards"
        :key="card"
        :title="card.title"
        :amount="card.amount"
      />
    </div>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import BaseChart from "@/components/BaseChart.vue";
import TrendsCard from "@/components/TrendsCard.vue";
import BaseButton from "@/components/BaseButton.vue";

// variables

const cards = ref([
  {
    title: "Resolved",
    amount: "449",
  },
  {
    title: "Received",
    amount: "426",
  },
  {
    title: "Average first response time",
    amount: "33m",
  },
  {
    title: "Average response time",
    amount: "3h 8m",
  },
  {
    title: "Resolution within SLA",
    amount: "94%",
  },
]);
</script>

<style lang="scss" scoped>
@import "../styles/media-mixin.scss";

.chart-block {
  border: 1px solid #dfe0eb;
}
.chart-holder {
  width: 100%;
  padding: 0 15px;

  @include tablet {
    padding: 0 24px;
  }

  @include desktop {
    width: 69%;
  }
}
.cards-holder {
  width: 100%;

  @include desktop {
    width: 31%;
  }

  &::before {
    content: "";
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: 0;
    width: 1px;
    background-color: #dfe0eb;
  }
}
</style>