---
title: 大屏模块
sidebarDepth: 0
---
  
## 已交付大屏尺寸整理

| 尺寸 | 比例   | 应用 | 备注1 | 备注2 |
| ----- | --------- | ----------- | ------- |------- |
| 1920*1080 | 16:9 |  进博会大屏2020           |         |         |
|      |      | 进博会大屏2021      |     |         |

<docc-self title="可视化图表"
  description="大屏模块，echarts图表demo" onlineLink="https://codepen.io/">
  <demo-calendar></demo-calendar>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/calendar.vue
  </highlight-code>
</docc-self>
 
<docc-apiTable title="Attributes" :tableBody="tableBody" :tableHead="tableHead">
</docc-apiTable>
  
<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`,
          `type |	类型 | string |	primary / success / warning / danger / info / text | —`
        ],
      }
    },

  }
</script>

<!-- 和vue一样，也可以设置样式，并且这里style样式只对当前md有效，不需要加上scoped -->
<style>
</style>