<template>
  <div :id="chartId" style="width:100%;height:100%;"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "doc-echarts",
  props: {
    chartId: {
      type: String,
      default() {
        return "chartId1";
      }
    },
    chartData: {
      type: Object,
      default() {
        return {
          title: "消费者购买力分布（当年）",
          unitName: "单位：万元",
          axisData: ["<23", "23~30", "30~40", "40~50", "50~60", "60+"],
          seriesData: []
        };
      }
    }
  },
  // watch: {
  //     chartData: {
  //       deep: true,
  //       handler(val) {
  //         this.setOptions(val)
  //       }
  //     }
  // },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.chartId));
      this.setOptions(this.chartData);
    },
    setOptions({ axisData, seriesData, nameData } = {}) {
      if (!this.chart || axisData.length <= 0) {
        return;
      }
      this.chart.setOption({  
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [10, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 6
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" }
            ]
          }
        ]
      });
    }
  }
};
</script>
 

<style lang="scss">
</style>
