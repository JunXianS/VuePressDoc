<template>
  <div class="update-log">
    <el-timeline>
      <el-timeline-item timestamp="2021/02/26" placement="top"  color="#fb9b5f">
        <el-card>
          <h4>新增 使用说明</h4>
          <p>孙君鲜 提交于 2021/02/26 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021/02/25" placement="top"  color="#fb9b5f">
        <el-card>
          <h4>部署 指南Doc项目</h4>
          <p>孙君鲜 提交于 2021/02/25 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021/02/24" placement="top"  color="#fb9b5f">
        <el-card>
          <h4>初始化 指南Doc项目</h4>
          <p>孙君鲜 提交于 2021/02/24 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  name: "update-log",
  props: {
    text: {
      type: String
    }
  },

  data() {
    return {};
  },

  methods: {}
};
</script>
<style scoped>
  .update-log{
    margin-top: 20px;
  }
</style>