<template>
  <!--一行-->
  <div class="flex-row">
    <span class="number">{{data.HYBM}}</span>
    <span class="name">{{data.XM}}</span>
    <span class="room">
      <div v-if="data.XM"
      > 排队中</div>
      <div  v-else></div>
    </span>
    <!-- <span class="hzlx">{{data.hzlx}}</span> -->
  </div>
</template>

<script>
export default {
  name: "Row",
  props: ["data"]
};
</script>

<style scoped>
.flex-row {
  display: flex;
  height: 64px;
  border: 1px solid #04c3dd;
  /*display: flex;*/
  /*左右留白*/
  /*margin: 0;*/
  /*justify-content: space-between;*/
}

.flex-row:nth-child(odd) {
  background-color: #003851;
}

.flex-row:nth-child(even) {
  background-color: #00527b;
}
.name {
  flex-grow: 1;
  width: 20%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-left: 1px solid #04c3dd;
  border-right: 1px solid #04c3dd;
  border-top: 1px solid #04c3dd;
  border-bottom: 1px solid #04c3dd;
  color: #ddd;
  font-size: 46px;
}

.room {
  flex-grow: 2;
  /*flex-grow:1;*/
  width: 20%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-left: 1px solid #04c3dd;
  border-right: 1px solid #04c3dd;
  border-top: 1px solid #04c3dd;
  border-bottom: 1px solid #04c3dd;
  color: #ddd;
  font-size: 46px;
}

.number {
  /*flex-grow:0.5;*/
  width: 20%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-left: 1px solid #04c3dd;
  border-right: 1px solid #04c3dd;
  border-top: 1px solid #04c3dd;
  border-bottom: 1px solid #04c3dd;
  color: #ddd;
  font-size: 46px;
}
.hzlx {
  /*flex-grow:1;*/
  width: 20%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-left: 1px solid #04c3dd;
  border-right: 1px solid #04c3dd;
  border-top: 1px solid #04c3dd;
  border-bottom: 1px solid #04c3dd;
  color: #ddd;
  font-size: 46px;
}
</style>