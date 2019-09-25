<template>
  <div class="demo">
    <!--半星展示-->
    <div class="demo-box">
      <div class="title">
        <div class="top">star-half 半星</div>
        <div class="down">只读的评分用来展示分数，允许出现半星</div>
      </div>
      <div class="box">
        <half-stars-item :stateTotal="7" :fontSize="16" :starsColor="'#FF771D'" :fontColor="'#FF771D'"></half-stars-item>
      </div>
      <div class="title">
        <div class="top">代码实例</div>
        <div class="code-example">
          <div  class="color-3e76f6">&lt;template&gt;</div>
          <div class="code-box">
            <span class="color-3e76f6 code-label">&lt;half-stars-item </span><br/>
            <span class="color-e96900">:stateTotal</span><span class="color-3e76f6">=</span><span class="color-42b983">"7"</span><br/>
            <span class="color-e96900">:fontSize</span><span class="color-3e76f6">=</span><span class="color-42b983">"16"</span><br/>
            <span class="color-e96900">:starsColor</span><span class="color-3e76f6">=</span><span class="color-42b983">"'#FF771D'" </span><br/>
            <span class="color-e96900">:fontColor</span><span class="color-3e76f6">=</span><span class="color-42b983">"'#FF771D'"</span>
            <span class="color-3e76f6" >&gt;</span>
          </div>
          <div class="color-3e76f6 code-label">&lt;/half-stars-item&gt;</div>
          <div  class="color-3e76f6">&lt;/template&gt;</div>
        </div>
      </div>
      <table>
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>fontColor</td>
          <td>评分字体颜色</td>
          <td>rgb值</td>
          <td>#76c5d0（蓝色）</td>
        </tr>
        <tr>
          <td>stateTotal</td>
          <td>总评分数</td>
          <td>Number</td>
          <td>0(最大10分)</td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>星星字体大小</td>
          <td>Number</td>
          <td>16px</td>
        </tr>
        <tr>
          <td>starsColor</td>
          <td>星星字体颜色</td>
          <td>rgb值</td>
          <td>#76c5d0 （蓝色）</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--星星-->
    <div class="demo-box">
      <div class="title">
        <div class="top">star 星星</div>
        <div class="down">只读的评分用来展示分数，评分用来点击评分</div>
      </div>
      <div class="box">
        <stars-item v-model="stateValue" :fontSize="16" :starsColor="'#FF771D'" :fontColor="'#FF771D'" :disabled="true"></stars-item>
      </div>
      <div class="title">
        <div class="top">代码实例</div>
        <div class="code-example">
          <div  class="color-3e76f6">&lt;template&gt;</div>
          <div class="code-box">
            <span class="color-3e76f6 code-label">&lt;stars-item </span><br/>
            <span class="color-e96900">v-model</span><span class="color-3e76f6">=</span><span class="color-42b983">"stateValue"</span><br/>
            <span class="color-e96900">:fontSize</span><span class="color-3e76f6">=</span><span class="color-42b983">"16"</span><br/>
            <span class="color-e96900">:starsColor</span><span class="color-3e76f6">=</span><span class="color-42b983">"'#FF771D'" </span><br/>
            <span class="color-e96900">:fontColor</span><span class="color-3e76f6">=</span><span class="color-42b983">"'#FF771D'"</span><br/>
            <span class="color-e96900">:disabled</span><span class="color-3e76f6">=</span><span class="color-42b983">"true"</span><br/>
            <span class="color-e96900">@stateTotalBtn</span><span class="color-3e76f6">=</span><span class="color-42b983">"stateTotalBtn"</span>
            <span class="color-3e76f6" >&gt;</span>
          </div>
          <div class="color-3e76f6 code-label">&lt;/stars-item&gt;</div>
          <div  class="color-3e76f6">&lt;/template&gt;</div>
          <div  class="color-3e76f6">&lt;script&gt;</div>
          <div class="code-box">
            <div class="js-keyword"><span class="color-e96900">export default</span> {</div>
            <div class="js-option">data(): {</div>
            <div class="js-function"><span class="color-e96900">return</span> {stateValue:<span class="color-fc1e70">3</span> }</div>
            <div class="js-option">}</div>
            <div class="js-keyword last-Symbol">}</div>
          </div>
          <div  class="color-3e76f6">&lt;/script&gt;</div>
        </div>
      </div>
      <table>
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>stateValue</td>
            <td>总评分数</td>
            <td>Number</td>
            <td>0(最大分值5)</td>
          </tr>
          <tr>
            <td>fontColor</td>
            <td>评分字体颜色</td>
            <td>rgb值</td>
            <td>#76c5d0（蓝色）</td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>星星字体大小</td>
            <td>Number</td>
            <td>16px</td>
          </tr>
          <tr>
            <td>starsColor</td>
            <td>星星字体颜色</td>
            <td>rgb值</td>
            <td>#76c5d0（蓝色）</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否点击</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--分页-->
    <div class="demo-box">
      <div class="title">
        <div class="top">Page 分页</div>
        <div class="down">当数据量较多时，使用分页可以快速进行数据切换。</div>
      </div>
      <div class="box">
        <page-item  v-model="currentPage" :show="5" :total="20" :stepNumber="5"></page-item>
      </div>
      <div class="title">
        <div class="top">代码实例</div>
        <div class="code-example">
          <div  class="color-3e76f6">&lt;template&gt;</div>
          <div class="code-box">
            <span class="color-3e76f6 code-label">&lt;page-item</span><br/>
            <span class="color-e96900">v-model</span><span class="color-3e76f6">=</span><span class="color-42b983">"currentPage"</span><br/>
            <span class="color-e96900">:show</span><span class="color-3e76f6">=</span><span class="color-42b983">"5"</span><br/>
            <span class="color-e96900">:total</span><span class="color-3e76f6">=</span><span class="color-42b983">"20" </span><br/>
            <span class="color-e96900">:stepNumber</span><span class="color-3e76f6">=</span><span class="color-42b983">"5" </span><br/>
            <span class="color-e96900">@changePage</span><span class="color-3e76f6">=</span><span class="color-42b983">"changePage"</span>
            <span class="color-3e76f6" >&gt;</span>
          </div>
          <div class="color-3e76f6 code-label">&lt;/page-item&gt;</div>
          <div  class="color-3e76f6">&lt;/template&gt;</div>
          <div  class="color-3e76f6">&lt;script&gt;</div>
          <div class="code-box">
            <div class="js-keyword"><span class="color-e96900">export default</span> {</div>
            <div class="js-option">data(): {</div>
            <div class="js-function"><span class="color-e96900">return</span> {currentPage:<span class="color-fc1e70">5</span> }</div>
            <div class="js-option">}</div>
            <div class="js-keyword last-Symbol">}</div>
          </div>
          <div  class="color-3e76f6">&lt;/script&gt;</div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>currentPage</td>
            <td>当前页数</td>
            <td>Number</td>
            <td>1</td>
          </tr>
          <tr>
            <td>show</td>
            <td>展示页码数</td>
            <td>Number</td>
            <td>5</td>
          </tr>
          <tr>
            <td>total</td>
            <td>总页数</td>
            <td>Number</td>
            <td>10</td>
          </tr>
          <tr>
            <td>stepNumber</td>
            <td>设置前进后退</td>
            <td>Number</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--开关-->
    <div class="demo-box">
      <div class="title">
        <div class="top">Switch 开关</div>
        <div class="down">基本用法，状态切换时会触发事件。</div>
      </div>
      <div class="box">
        <switch-item :open="'ON'" :close="'OFF'" v-model="switchState"></switch-item>
      </div>
      <div class="title">
        <div class="top">代码实例</div>
        <div class="code-example">
          <div  class="color-3e76f6">&lt;template&gt;</div>
          <div class="code-box">
            <span class="color-3e76f6 code-label">&lt;switch-item</span><br/>
            <span class="color-e96900">:open</span><span class="color-3e76f6">=</span><span class="color-42b983">"'ON'"</span><br/>
            <span class="color-e96900">:close</span><span class="color-3e76f6">=</span><span class="color-42b983">"'OFF'"</span><br/>
            <span class="color-e96900">v-model</span><span class="color-3e76f6">=</span><span class="color-42b983">"switchState"</span>
            <span class="color-3e76f6" >&gt;</span>
          </div>
          <div class="color-3e76f6 code-label">&lt;/switch-item&gt;</div>
          <div  class="color-3e76f6">&lt;/template&gt;</div>
          <div  class="color-3e76f6">&lt;script&gt;</div>
          <div class="code-box">
            <div class="js-keyword"><span class="color-e96900">export default</span> {</div>
            <div class="js-option">data(): {</div>
            <div class="js-function"><span class="color-e96900">return</span> {switchState:<span class="color-fc1e70">false</span> }</div>
            <div class="js-option">}</div>
            <div class="js-keyword last-Symbol">}</div>
          </div>
          <div  class="color-3e76f6">&lt;/script&gt;</div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>switchState</td>
            <td>设置开关状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>open</td>
            <td>设置开启名称</td>
            <td>String</td>
            <td>ON</td>
          </tr>
          <tr>
            <td>close</td>
            <td>设置关闭名称</td>
            <td>String</td>
            <td>OFF</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--进度条-->
    <div class="demo-box">
      <div class="title">
        <div class="top">Progress 进度条</div>
        <div class="down">显示当前进度</div>
      </div>
      <div class="box">
        <progress-item :progress="80" :progressBg="'#19be6b'"></progress-item>
      </div>
      <div class="title">
        <div class="top">代码实例</div>
        <div class="code-example">
          <div  class="color-3e76f6">&lt;template&gt;</div>
          <div class="code-box">
            <span class="color-3e76f6 code-label">&lt;progress-item</span><br/>
            <span class="color-e96900">:progress</span><span class="color-3e76f6">=</span><span class="color-42b983">"80"</span><br/>
            <span class="color-e96900">:progressBg</span><span class="color-3e76f6">=</span><span class="color-42b983">"'#19be6b'"</span>
            <span class="color-3e76f6" >&gt;</span>
          </div>
          <div class="color-3e76f6 code-label">&lt;/progress-item&gt;</div>
          <div  class="color-3e76f6">&lt;/template&gt;</div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>progress</td>
            <td>进度</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>progressBg</td>
            <td>进度条颜色</td>
            <td>String</td>
            <td>#2db7f5（蓝色）</td>
          </tr>
        </tbody>
      </table>
    </div>
      <!--滑块-->
    <!--<div class="demo-box">-->
      <!--<div class="title">-->
        <!--<div class="top">Slider 滑块</div>-->
        <!--<div class="down">滑动输入器，用于在数值区间内进行选择。</div>-->
      <!--</div>-->
      <!--<div class="box">-->
        <!--<slider-item v-model="rangeValue" :min="0" :max="100" :sliderBarBg="'#FF771D'" ></slider-item>-->
      <!--</div>-->
      <!--<table>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>参数</th>-->
          <!--<th>说明</th>-->
          <!--<th>类型</th>-->
          <!--<th>默认值</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
          <!--<tr>-->
            <!--<td></td>-->
            <!--<td></td>-->
            <!--<td></td>-->
            <!--<td></td>-->
          <!--</tr>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->
  </div>
</template>

<script>
  import { Range } from 'mint-ui';
  import { mapGetters , mapActions } from 'vuex'

  export default {
    name:'demo',
    data(){
      return{
        stateValue:3,
        currentPage:5,
        switchState:false,
        rangeValue:10,
      }
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
    ...mapActions([]),
      phone(inputText){
        console.log(inputText)
      },
    }
  }
</script>

