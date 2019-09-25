<template>
  <div class="progress-item clearfix">
    <div class="progress-right">
      <p v-if="progress<100">{{progress}}%</p>
      <div class="progress" v-if="progress===100">
        <i class="iconfont icon-success"></i>
        <span>成功</span>
      </div>
    </div>
    <div class="progress-left">
      <div class="progress-inner">
        <div class="progress-bg" :style="{width:progress+'%',backgroundColor:progressBg}"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'progress-item',
    props: {
      progress:{
        type:[Number,String],
        default:0,
      },
      progressBg:{
        type:String,
        default:'#2db7f5'
      }
    },
  }
</script>
