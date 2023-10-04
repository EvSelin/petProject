<template>
  <div class="base-chart">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :type="chartData.type"
    />
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import Chart from "chart.js/auto";

// variables
const hoverLines = ref({
  id: "hoverLine",
  afterDatasetsDraw(chart, args, plugins) {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom, left, right, width, height },
      scales: { x, y },
    } = chart;

    console.log(tooltip.dataPoints.length);
  },
});

const chartData = ref({
  type: "line",
  datasets: [
    {
      label: "Today",
      data: [
        { x: 0, y: 15 },
        { x: 0.7, y: 20 },
        { x: 1.5, y: 25 },
        { x: 3, y: 29 },
        { x: 5, y: 28 },
        { x: 6, y: 30 },
        { x: 7.5, y: 50 },
        { x: 8, y: 51 },
        { x: 8.5, y: 50 },
        { x: 9.2, y: 40 },
        { x: 10, y: 25 },
        { x: 11.8, y: 18 },
        { x: 12.5, y: 20 },
        { x: 12.5, y: 20 },
        { x: 13.7, y: 30 },
        { x: 14.3, y: 40 },
        { x: 15, y: 45 },
        { x: 16.5, y: 48 },
        { x: 16.5, y: 48 },
        { x: 18, y: 42 },
        { x: 19.3, y: 38 },
      ],
      borderColor: "#3751FF",
      fill: true,
      tension: 0.3,
      // pointRadius: 0,
      backgroundColor: (context) => {
        const bgColor = [
          "rgba(55, 81, 255,0.13)",
          "rgba(55, 81, 255,0.1)",
          "rgba(255, 255, 255,0)",
        ];

        if (!context.chart.chartArea) {
          return;
        }

        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(left, top, right, bottom);
        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(0.3, bgColor[1]);
        gradientBg.addColorStop(1, bgColor[2]);

        return gradientBg;
      },
    },
    {
      label: "Yesterday",
      data: [
        { x: 0, y: 33 },
        { x: 1, y: 34 },
        { x: 2, y: 32 },
        { x: 3, y: 30 },
        { x: 3.8, y: 25 },
        { x: 5.2, y: 25 },
        { x: 6.2, y: 30 },
        { x: 8, y: 33 },
        { x: 9.8, y: 32 },
        { x: 10.3, y: 30 },
        { x: 12, y: 20 },
        { x: 13, y: 17 },
        { x: 13.8, y: 20 },
        { x: 14.8, y: 30 },
        { x: 15.3, y: 40 },
        { x: 15.5, y: 42 },
        { x: 16, y: 40 },
        { x: 16.6, y: 32 },
        { x: 17.5, y: 29 },
        { x: 18, y: 30 },
        { x: 19.3, y: 35 },
      ],
      borderColor: "#DFE0EB",
      fill: false,
      tension: 0.3,
      pointRadius: 0,
    },
  ],
  plugins: [
    {
      id: "verticalLinePlugin",
      beforeDraw: function (chart, easing) {
        const pluginOptions = chart.options.plugins.verticalLinePlugin;
        if (chart._active && chart._active.length) {
          const activePoint = chart._active[0];
          const ctx = chart.ctx;
          const x = activePoint.element.x;
          const topY = chart.scales.y.top;
          const bottomY = chart.scales.y.bottom;

          // Draw vertical line
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = pluginOptions.lineColor;
          ctx.lineWidth = pluginOptions.lineWidth;
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.stroke();
          ctx.restore();
        }
      },
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  transitions: {
    show: {
      animations: {
        x: {
          from: 0,
        },
        y: {
          from: 0,
        },
      },
    },
    hide: {
      animations: {
        x: {
          to: 0,
        },
        y: {
          to: 0,
        },
      },
    },
  },
  animation: {
    easing: "easeInOutQuad",
    duration: 1000,
  },
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      min: 0,
      max: 22,
      showLabelBackdrop: false,
      textStrokeColor: "red",
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 1,
      },
    },
    y: {
      min: 0,
      max: 60,
      position: "right",
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/media-mixin.scss";

.base-chart {
  width: 100%;

  @include desktop {
    max-width: 693px;
  }
}
</style>