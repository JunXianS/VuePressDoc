---
title: 模板说明
---

## 模板展示
模板展示如图： ① 标题 ② 描述文字 ③ 视图展示 ④ 适用平台 ⑤ 其他描述 

<img src="img/moban.png" style="width:80%;">

## 模板代码


①，自定义.vuepress/components/demo文件夹下新建vue文件，引入以<code>文件夹名-文件夹名-vue文件名</code>方式引入即可 <br/>
②，highlight-code是代码高亮插件，用<<<@ 引入.vuepress/components/demo下的vue文件即可展示代码 

::: tip

```vue

<docc-self title="这里写标题" description="这里是描述文字" onlineLink="https://codepen.io/1011cat/pen/KjEOWO"> 
 <!-- 新增vue文件→在.vuepress/components/demo文件夹下 --> 
  <demo-docButton-button></demo-docButton-button> 
  <highlight-code slot="codeText" lang="vue"> 
<<< @/docs/.vuepress/components/demo/docButton/button.vue
  </highlight-code> 
  <!-- 描述部分 -->
   <template slot="describe">  
     <div class="code--tip">
        如果你有想要描述的其他内容或提示  <code>code</code> 请写在此处 
      </div>  
   </template>
</docc-self>

<style>
</style>

```
::: 

## 代码说明

<docc-apiTable title="Attributes" :tableBody="tableBody" :tableHead="tableHead">
</docc-apiTable> 

<script>
  export default {
    data() {
      return { 
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`, 
        tableBody: [
          `title | 要写的标题 | String | / | 标题`,
          `description |	描述文字 | string |	/ |这里是描述文字 `,
          `onlineLink |	codepen账号地址 | string |	/ | 无`
        ],
      }
    },

  }
</script> 

