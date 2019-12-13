<template>
  <div class="center">
    <!-- 排队队列 -->
    <div class="main">
      <Row v-for="(item,index) in datalist" :key="index" :data="item"></Row>
    </div>
    <!-- 温馨提示区域 -->
    <div class="right-tips">
      <!-- style="align-self: center" -->
      <div class="right-tips-content">1.体检前一天请多注意休息，勿熬夜，不要饮酒，避免剧烈运动。</div>
      <div class="right-tips-content">2.体检当天请穿宽松衣服，便于穿脱。</div>
      <div class="right-tips-content">3.体检当天需要进行抽血化验和B超检查，请您早晨不要吃任何食物(包括牛奶、豆浆和含糖饮料等)。</div>
    </div>
  </div>
</template>

<script>
import Row from './row'
export default {
  name: "Center",
  props:["datalist"],
  components:{
    Row
  }
};
</script>

<style scoped>
.center {
  display: flex;
  border: 1px solid #04c3dd;
  /*margin-bottom: 6px;*/
}
.main {
  width: 60%;

  /*height: 80%;*/
  /*整行背景色*/
  /*background-color: #00f;*/

  display: flex;
  flex-direction: column;
}
.right-tips {
  /*必须设置宽度*/
  width: 30%;
  /*margin:1px;*/
  border: 2px solid #04c3dd;
  flex-grow: 1;
  text-align: left;

  /*    justify-content: center;*/
  display: flex;
  flex-direction: column;
  /*color:#d9930b;*/
  color: #ffb200;
  /*background-color: #023450;*/
  background-color: #033550;
  /*background-color: #ccc;*/
  /*100% 高度无效*/
  /*height: 604px;*/
}
/*温馨提示文本内容*/
.right-tips-content {
  margin-bottom: 10px;
  display: block;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  /* 定义块级元素中第一个内容行的缩进 */
  text-indent: 1em;
  padding: 1px;
}

</style>