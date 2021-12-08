<template>
  <div class="d-flex flex-jsa">
    <div>
     <p class="title"> 一行超出显示省略号：</p>
      <div class="box1">演示文字演示文字演示文字演示文字演示文字演示文字演示文字演示文字</div>
    </div>
    <div>
      <p class="title">多行超出显示省略号：</p> 
      <div class="box2">演示文字演示文字演示文字演示文字演示文字演示文字演示文字演示文字</div>
    </div>
  </div>
</template> 
<style>
/* 一行超出显示省略号： */
.box1 {
  padding: 8px;
  border: 1px solid #eee;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 多行超出显示省略号： */
.box2 {
  padding: 0 8px;
  border: 1px solid #eee;
  width: 200px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style> 