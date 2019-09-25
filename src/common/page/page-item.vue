<template>
  <div class="page-item">
    <div class="page-box clearfix">
      <a href="javascript:void(0)" class="page-left" @click="prev" :class="currentPage===1?'disabled':''"><i class="iconfont left"></i></a>
      <a href="javascript:void(0)" class="page-right" @click="next" :class="currentPage===totalPage?'disabled':''"><i class="iconfont right"></i></a>
      <div class="middle">
        <ul>
          <li>
            <a href="javascript:void(0)" :class="currentPage===1?'active':''" @click="changePage(1)">1</a>
          </li>
          <li v-if="startPage" :class="ellipsisShow?'ellipsis':''" @mouseenter="ellipsisShow=false"  @mouseleave="ellipsisShow=true">
            <a href="javascript:void(0)"  :title="'向前'+stepNumber+'步'" @click="prevFive(stepNumber)">
              <i class="iconfont more"></i>
              <i class="iconfont prev displayNone"></i>
            </a>
          </li>
          <li v-for="(page,index) in allPage">
            <a href="javascript:void(0)" :class="currentPage===(page+1)?'active':''" @click="changePage(page+1)">{{page+1}}</a>
          </li>
          <li v-if="lastPage" :class="ellipsisShow?'ellipsis':''" @mouseenter="ellipsisShow=false"  @mouseleave="ellipsisShow=true">
            <a href="javascript:void(0)"  :title="'向后'+stepNumber+'步'" @click="nextFive(stepNumber)">
              <i class="iconfont more"></i>
              <i class="iconfont next displayNone"></i>
            </a>
          </li>
          <li v-if="showPage<totalPage">
            <a href="javascript:void(0)" :class="currentPage===totalPage?'active':''" @click="changePage(totalPage)">{{totalPage}}</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'page-item',
    props: {
      current:{
        type:[Number,String],
        default:1,
      },
      show:{
        type:[Number,String],
        default:5,
      },
      total:{
        type:[Number,String],
        default:10,
      },
      stepNumber:{
        type:[Number,String],
        default:5,
      },
      value:{
        type:[Number,String],
        default:1,
      }
    },
    data(){
      return{
        currentPage:this.value,
        showPage:this.show,
        totalPage:this.total,
        ellipsisShow:true
      }
    },
    computed:{
      //前省略号计算方式
      startPage(){
        let showPage = this.showPage;
        let totalPage = this.total;
        let currentPage=this.currentPage;
        if(showPage===1 || showPage+1===totalPage){//判断分页显示长度是否为1,或者分页显示长度+1==总分页数，隐藏省略号
          return false
        }
        else if(currentPage-showPage>0){//判断显示前省略号
          return true
        }
        return false
      },
      //后省略号计算方式
      lastPage(){
        let showPage = this.showPage;
        let totalPage = this.total;
        let currentPage=this.currentPage;
        if(showPage===1 || showPage+1===totalPage){//判断分页显示长度是否为1,或者分页显示长度+1==总分页数，隐藏省略号
          return false
        }
        else if(currentPage+showPage-(showPage-2)>=totalPage){//判断隐藏后省略号，注：“(showPage-2)”表示当前页码数前有多少个占位数
            return false
        }

        return true
      },
      allPage(){
        let showPage = this.showPage;
        let totalPage = this.total;
        let currentPage=this.currentPage;
        let  allPage=[];
        let start=null;
        let end=null;
        if(showPage===1){//当展示页数为1,分页数全展示
          start=1;
          end=totalPage-2
        }
        else if(showPage>=totalPage){//展示页数大于总页码数，分页全展示
          start=1;
          end=totalPage-1
        }
        else{
          if(currentPage<=showPage-1){//设置展示页码前N-1个的事件相同
            start=1;
            end=showPage-1
          }
          else{
            start=currentPage-showPage+1;
            end=currentPage
          }
          if(currentPage>=totalPage-1){
            start=totalPage-showPage
          }
          if(end>=totalPage-2){
            end=totalPage-2;
          }
        }
        for(let i=start;i<=end;i++){
          allPage.push(i)
        }
        return allPage
      }
    },
    methods:{
      //
      prev(){
        if(this.currentPage<=1){
          return false;
        }
        this.changePage(this.currentPage-1);
      },
      prevFive(stepNumber){
        if(this.currentPage-stepNumber<=1){
          this.changePage(1);
          return ;
        }
        this.changePage(this.currentPage-stepNumber)
      },
      changePage(page){
        if(this.currentPage != page){
          this.currentPage = page;
          this.$emit('input',this.currentPage);
        }
      },
      nextFive(stepNumber){
        if(this.currentPage+stepNumber>=this.totalPage){
          this.changePage(this.totalPage);
          return ;
        }
        this.changePage(this.currentPage+stepNumber);
      },
      next(){
        if(this.currentPage>=this.totalPage){
          return false;
        }
        this.changePage(this.currentPage+1);
      }
    }
  }
</script>
