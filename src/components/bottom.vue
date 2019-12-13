<template>
  <div id="move-box" class="called">
    <span id="left-box" class="called-text">已呼未做 :&nbsp;</span>
    <span id="marquee" class="called-names" ref="box">{{nameText}}</span>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data: function() {
    return {
      elem: null,
      elemWidth: 0,
      leftLocation: 0,
      rightLocation: 0,
      current: 0
    };
  },
  props: ["calledArr"],
  mounted: function() {
    this.elem = document.getElementById("marquee");
    this.elemWidth = this.elem.offsetWidth;
    this.leftLocation =
      document.getElementById("left-box").offsetLeft +
      document.getElementById("left-box").offsetWidth -
      this.elemWidth;
    this.current = this.leftLocation;
    this.rightLocation = document.getElementById("move-box").offsetWidth;
    this.moveElement();
  },
  updated: function() {
    //vue的数据改变并且引起页面视图的改变，此时触发的是updated事件
    //内容发送变化时，重新计算长度，位置？
    this.elemWidth = this.elem.offsetWidth;
    this.leftLocation =
      document.getElementById("left-box").offsetLeft +
      document.getElementById("left-box").offsetWidth -
      this.elemWidth;
    // this.current = this.leftLocation; //当前位置需要立即变化？？
    // this.rightLocation = document.getElementById("move-box").offsetWidth; //右边位置不会变化
  },
  methods: {
    moveElement: function() {
      if (this.current > this.leftLocation) {
        this.current -= 1; //移动步长 1px
        if (this.current < this.leftLocation) {
          //放置最边上，不移除出去了
          this.current = this.leftLocation;
        }
        this.elem.style.left = this.current + "px"; //jquery .css("left", xx)
        setTimeout(this.moveElement, 20); //20ms 移动一下
      } else {
        //移到边上了;暂停，重置位置
        this.current = this.rightLocation;
        //setTimeout(moveElement,5000);//停留5s再移动
        setTimeout(this.moveElement, 20); //20ms 移动一下
      }
    }
  },
  computed: {
    nameText: function() {
      var text = "";
      if (this.calledArr.length > 0) {
        for (var i = 0; i < this.calledArr.length - 1; i++) {
          text = text + this.calledArr[i].XM + ", ";
        }
        text = text + this.calledArr[i].XM;
      }
      return text;
    }
  }
};
</script>

<style scoped>
.called {
  margin: 2px;
  display: flex;
  /*background-color: #00bbee;*/
  background-color: rgba(0, 0, 0, 1);
  height: 66px;
  line-height: 66px;
  font-size: 42px;
  border: 1px solid white;
  position: relative;
  /*溢出 隐藏*/
  overflow: hidden;
  /*width: 1500px;*/
}
.called-text {
  /*遮挡*/
  position: relative;
  z-index: 1;
  /*margin-left:5px;*/
  padding-left: 7px;
  font-weight: bolder;
  /*width: 190px;*/
  color: #fff;
  background-color: rgba(0, 0, 0, 1);
}

.called-names {
  /*font-weight: bolder;*/

  color: #fff;
  white-space: pre;
  position: absolute;
  /*infinite 重复次数*/
  /*animation: move 20s linear infinite;*/
  /*animation-delay:2s;*/
}
</style>