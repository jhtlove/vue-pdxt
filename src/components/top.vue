<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 col-md-4 center-block logo"></div>
      <div class="col-sm-3 col-md-3 col-lg-3 window-text">{{queueText}}</div>
      <button class="col-sm-1 col-md-1 col-lg-1" @click="pageRefresh">刷新</button>
      <Timer class="col-sm-4 col-md-4 col-lg-4 text-center time-text"></Timer>
    </div>
  </div>
</template>

<script>
import Timer from "./time";

export default {
  name: "Top",
  props: ["queueText"],
  components: {
    Timer
  },
  data() {
    return {
      
    };
  },
  mounted: function() {
    
  },
  methods: {
    pageRefresh:function(){
      window.location.reload();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  height: 30px;
  background-color: aqua;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.logo {
  margin-top: 3px;
  /* width: 30%; */
  height: 84px;
  background-image: url(../assets/pdxt_logo.png);
  background-repeat: no-repeat;
}
.window-text {
  height: 83px;
  line-height: 83px;
  font-size: 40px;
  text-align: center;
  /* width: 30%; */
  background-color: #00bbee;
  border-radius: 0 0 40% 40%;
  color: #fff;
}
.time-text {
  /* width: 30%; */
  height: 84px;
  line-height: 84px;
  /* padding-right: 10px; */
  text-align: right;
  /*color:#1b83ad;*/
  color: #1697bf;
  font-size: 20px;
  /* background-color:chartreuse; */
}
</style>
