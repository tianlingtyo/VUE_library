<template>
  <div class="stars-item">
    <div class="stars-left">
      <i class="iconfont" v-for="itemClass in itemClasses" :class="itemClass" :style="{fontSize:fontSize+ 'px',color:starsColor}"></i>
    </div>
    <div class="half stars-title" :style="{color:fontColor}">{{Number(stateTotal).toFixed(1)}}分</div>
  </div>
</template>
<script>
  export default {
    name: 'half-stars-item',
    props: {
      fontColor:{
        type:String,
        default:'#76c5d0'
      },
      stateTotal:{
        type:[Number,String],
        default:0,
      },
      fontSize:{
        type:[Number,String],
        default:16,
      },
      starsColor:{
        type:String,
        default:'#76c5d0'
      }
    },
    computed:{
      score(){
        let score;
        score=(this.stateTotal/2).toFixed(1);
        return score;
      },
      itemClasses(){
        let itemClasse=[];
        var score = Math.floor(this.score); //将数值调整为整数及.5的形式，例：4.3 => 4；4.6 => 4.5
        var hasDecimal = this.score %1 !==0;
        for(let i =0;i<score;i++){
          itemClasse.push('star-on');
        }
        if(hasDecimal){
          itemClasse.push('star-half');
        }
        while(itemClasse.length<5){
          itemClasse.push('star-off');
        }
        return itemClasse;
      },
    },
  }
</script>
