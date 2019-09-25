<template>
  <div class="stars-item">
    <div class="stars-left stars-title" :style="{color:fontColor}">评分：</div>
    <div class="all">
      <i class="iconfont" :style="{fontSize:fontSize+'px',color:starsColor}"  :class="{'pointer':disabled===true,'star-on':scoreTotal>=n,'star-off':scoreTotal<n}" v-for="(n,index) in 5" @click="starsBtn(index)"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'stars-item',
    data(){
      return{
        score:'',
      }
    },
    props: {
      fontColor:{
        type:String,
        default:'#76c5d0',
      },
      value:{
        type:[Number,String],
        default:0,
      },
      fontSize:{
        type:[Number,String],
        default:16,
      },
      starsColor:{
        type:String,
        default:'#76c5d0',
      },
      disabled:{
        type:Boolean,
        default:false,
      }
    },
    computed:{
      scoreTotal(){
       if(this.score>5){
          return 5
        }
        return this.score
      }
    },
    methods:{
      starsBtn(index){
        if(!this.disabled){
          return ;
        }
        this.score=index+1;
        this.$emit('input',this.score);
        alert("当前分数："+this.score)
      }
    },
    created(){
      this.score=this.value;
    }
  }
</script>

