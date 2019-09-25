<template>
  <div class="slider-item clearfix">
    <div class="slider-left">{{min}}</div>
    <div class="slider-right">{{max}}</div>
    <div class="slider-middle">
      <div class="slider-wrap">
        <div class="slider-bar"  :style="{width:progress+'%', backgroundColor:sliderBarBg}"></div>
        <div class="slider-btn-box"
             @mouseover="mouseover"
             :style="{left:progress+'%'}">
          <div class="slider-btn" :style="{border:'2px solid '+sliderBarBg}"></div>
          <div class="slider-prompt"  :style="{marginLeft:-promptWidth+'px'}">{{value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'slider-item',
    props: {
      min:{
        type:[Number,String],
        default:0,
      },
      max:{
        type:[Number,String],
        default:100,
      },
      value:{
        type:Number,
      },
      sliderBarBg:{
        type:String,
        default:'#57a3f3'
      },
      disabled:{
        type:Boolean,
        default:false,
      }
    },
    data(){
      return{
        promptWidth:'',

      }
    },
    computed: {
      progress() {
        let value = this.value;
        if (typeof value === 'undefined' || value === null){
          return 0;
        }
        return Math.floor((value - this.min) / (this.max - this.min) * 100);
      },
    },
    methods:{
      mouseover(){
        let width;
        console.log(111)
        width =document.getElementsByClassName('slider-prompt')[0].clientWidth;
        this.promptWidth=(width/2)-2;
      }
    },
    mounted () {


    }
  }
</script>
