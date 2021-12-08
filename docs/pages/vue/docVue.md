---
title: 2.0 Button 按钮
---
 <!-- 编写模板 -->
<docc-self title="标题"
  description="这里是描述文字"
  onlineLink="https://codepen.io/1011cat/pen/KjEOWO">  
  <demo-docButton-button></demo-docButton-button> 
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/docButton/button.vue
  </highlight-code> 
  <!-- 描述部分 -->
   <template slot="describe">  
     <div class="code--tip">
        如果你有想要描述的其他内容或提示  <code>code</code> 请写在此处,
        如果你有想要描述的其他内容或提示  <code>code</code> 请写在此处，。。。。 
      </div>  
   </template>
</docc-self>
