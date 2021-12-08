
<template>
  <div class="code">
    <div class="code--title">
      <!-- 标题 -->
      <h2>{{title}}</h2>
      <!-- 描述 -->
      <small>{{description}}</small>
    </div> 
    <div class="code--demo">
       <small class="s">视图展示：</small> 
      <div class="code-content"> 
        <slot></slot>
      </div>
    </div>
    <div v-if="isShow"
         class="code--segment">
      <slot name="codeText"></slot>
    </div>
    <div v-if="$slots.codeText"
         class="code--button">
      <div @click="handleToggleShow"
           class="code--show">
        {{codeTextBtn}}
      </div>
      <div v-if="onlineLink"
           class="code--online"
           @click="handleOnline">
        {{codeTextBtnOnline}}
      </div>
    </div> 
   <div class="code--bottom">
       <small>适用平台：{{prot}}</small> 
       <slot name="describe"></slot>  
   </div>
  
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type: String,
      default: '标题'
    },
    prot: {
      type: String,
      default: 'pc端'
    },
    description: String,
    onlineLink: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      codeTextBtn: '显示代码',
      codeTextBtnOnline: '在线运行'
    }
  },
  methods: {
    handleToggleShow () {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    },
    handleOnline () {
      window.open(this.onlineLink)
    }
  }
}
</script>

<style lang="less">
.code {
  padding: 10px 0;
  .code--title {
    h2 {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 18px;
    }

    small {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      color: #5e6d82;
    }
  }
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
      0 1px 2px 0 rgba(232, 237, 250, 0.5);
      .s{
        display: inline-block;
        padding: 10px;
        color: #5e6d82;
      }
    .code-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 2%;
      border-bottom: 1px solid #ddd;
      >div{
        width: 100%;
      }
    }
  }
  .code--button {
    // display: flex;
    position: relative;
    background: #fafbfc;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);

    .code--show {
      // flex: 3;
      display: flex;
      justify-content: center;
    }
    .code--show:hover {
      font-size: 17px;
    }
    .code--online {
      position: absolute;
      top: 0;
      right: 0;
      padding-left: 5px;
      padding-right: 25px;
    }
    .code--online:hover {
      font-size: 17px;
    }
  }
.code--bottom{
  padding:8px 0; 
}
.code--tip{
    padding:16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 10px 0;
}
  & + .code {
    margin-top:10px;
  }

  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
