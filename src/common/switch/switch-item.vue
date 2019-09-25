<template>
    <div class="switch-item">
        <input type="checkbox" :checked="switchShow" id="switch" @change="change"/>
        <label for="switch" class="switch-box">
          <span class="switch-title" v-if="switchShow">{{open}}</span>
          <span class="switch-title" v-if="!switchShow">{{close}}</span>
        </label>
    </div>
</template>
<script>
  export default {
    name: 'switch-item',
    props: {
      open:{
        type:String,
        default:'ON',
      },
      close:{
        type:String,
        default:'OFF',
      },
      value:{
        type:Boolean,
        default:'false'
      },
    },
    data(){
      return{
        switchShow:this.value,
      }
    },
    methods:{
      change(){
        this.switchShow=!this.switchShow;
        this.$emit('input',this.switchShow)
      }
    },
  }
</script>
