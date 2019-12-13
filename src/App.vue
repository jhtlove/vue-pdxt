<template>
  <div id="app">
    <Top :queueText='queueText' />
    <Header />
    <Center :datalist="displayArr" />
    <Bottom :calledArr="calledArr" />
    <!-- <ViewButton/> -->
    <Modal v-model="showModal" title="队列设置 " @on-ok="ok" @on-cancel="cancel">
      <!-- <div class="container">
        <div class="row">
          <div class="col-sm-3 col-sm-push-3">
            <Input v-model="typeValue" placeholder="请输入队列类型..." style="width: auto" />
          </div>
        </div>
      </div>-->
      <Row>
        <!-- col是html 自闭和标签  能识别i-col 不能识别 i-button??? -->
        <i-col span="12" push="6">
          <i-input v-model="typeValue" placeholder="请输入队列类型...">
            <span slot="prepend">类型：</span>
            <!-- <span slot="append">.com</span> -->
          </i-input>
        </i-col>
      </Row>
      <!-- <div>typevalue {{typevalue}}</div> -->
    </Modal>
  </div>
</template>

<script>
import Top from "./components/top.vue";
import Header from "./components/header.vue";
import Center from "./components/center";
import Bottom from "./components/bottom";

import { Message } from "view-design";
// import Vue from 'vue';

export default {
  name: "app",
  components: {
    Top,
    Header,
    Center,
    Bottom,
    // Modal,
    // [Input.name]: Input,
    // // Message   // 这样写，会报错 not used
    [Message.name]: Message
    // Row,
    // [Col.name]: Col,
    // [Button.name]: Button
    // ,
    // [Popup.name]:Popup,
    // [Cell.name]:Cell
  },
  data() {
    return {
      queueText: "",
      typeValue: "",
      showModal: false,
      rowCount: 5,
      isStart: true,
      isOver: true,
      lastCalled: "",
      showIndex: 0,
      websock: null,
      newWaitArr: [],
      newCalledArr: [],
      waitArr: [], //所有等待
      calledArr: [], //已呼队列
      displayArr: [{}, {}, {}, {}, {}] //显示队列：循环从所有等待中取数据
    };
  },
  created() {},
  mounted: function() {
    this.timer = setInterval(() => {
      this.genDisplayArr();
    }, 15000); //15s 刷新一次显示
    // $('#myModal').modal('show');
    // var s = "";
    // s += " 网页可见区域宽：" + document.body.clientWidth + " ";
    // s += " 网页可见区域高：" + document.body.clientHeight + " ";
    // s +=" 网页可见区域宽：" +
    //   document.body.offsetWidth +
    //   " (包括边线和滚动条的宽)" +
    //   " ";
    // s +=
    //   " 网页可见区域高：" +
    //   document.body.offsetHeight +
    //   " (包括边线的宽)" +
    //   " ";
    // s += " 网页正文全文宽：" + document.body.scrollWidth + " ";
    // s += " 网页正文全文高：" + document.body.scrollHeight + " ";
    // s += " 网页被卷去的高(ff)：" + document.body.scrollTop + " ";
    // s +=
    //   " 网页被卷去的高(ie)：" + document.documentElement.scrollTop + " ";
    // s += " 网页被卷去的左：" + document.body.scrollLeft + " ";
    // s += " 网页正文部分上：" + window.screenTop + " ";
    // s += " 网页正文部分左：" + window.screenLeft + " ";
    // s += " 屏幕分辨率的高：" + window.screen.height + " ";
    // s += " 屏幕分辨率的宽：" + window.screen.width + " ";
    // s += " 屏幕可用工作区高度：" + window.screen.availHeight + " ";
    // s += " 屏幕可用工作区宽度：" + window.screen.availWidth + " ";
    // s += " 你的屏幕设置是 " + window.screen.colorDepth + " 位彩色" + " ";
    // s += " 你的屏幕设置 " + window.screen.deviceXDPI + " 像素/英寸" + " ";
    // alert(s);
    if (!window.localStorage) {
      alert("浏览器不支持localstorage");
    } else {
      var storage = window.localStorage;
      if (!storage.getItem("queueType")) {
        this.showModal = true; //模态框
      } else {
        this.typeValue = storage.getItem("queueType");
        // this.initWebSocket();
        this.showModal = true;
      }
    }
  },
  destroyed: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    // this.websock.close();
  },
  methods: {
    ok() {
      window.localStorage.setItem("queueType", this.typeValue);
      // this.$Message 为什么用不了？？？
      
      this.initWebSocket();
    },
    cancel() {
      // Message.info("Clicked cancel");
    },

    initWebSocket: function() {
      window.console.log("initWebSocket");
      // const wsuri = "ws://192.168.3.37:4550/HisSocket?userid=123456789";
      // const wsuri = "ws://www.zxyyxxzx.com:7002/HisSocket?userid=123456789";
      var userid = "";
      switch (this.typeValue) {
        case "1":
          userid = "TJ1001";
          this.queueText="男区窗口";
          Message.info("修改队列类型成功！");
          break;
        case "2":
          userid = "TJ1002";
          this.queueText="女区窗口";
          Message.info("修改队列类型成功！");
          break;
        case "3":
          userid = "TJ1003";
           this.queueText="综合区窗口";
           Message.info("修改队列类型成功！");
          break;
        default:
          this.showModal = true;
          Message.info("队列类型设置有误！");
      }
      const wsuri = "ws://www.zxyyxxzx.com:5080/HisSocket?userid=" + userid;
      window.console.log("uri : " + wsuri);
      this.websock = new WebSocket(wsuri);
      this.websock.onopen = this.websocketonopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websockonclose;
    },
    websocketonopen() {
      window.console.log("Socket 已打开");
    },
    websocketonmessage(msg) {
      window.console.log(msg);
      var theData = JSON.parse(msg.data);
      if (theData.state == "true") {
        window.console.log("state is true");
        var arrData = theData.row01;
      } else {
        window.console.log("state is false");
        this.newWaitArr = [];
        this.newCalledArr = [];
        this.waitArr = [];
        this.calledArr = [];
        return;
      }

      window.console.log(arrData[0]);
      this.newWaitArr = [];
      this.newCalledArr = [];
      for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].ZT == "2") {
          this.newWaitArr.push(arrData[i]);
        } else if (arrData[i].ZT == "3") {
          this.newCalledArr.push(arrData[i]);
        }
      }
      // this.newWaitArr = theData.data; //更新的 等待
      // this.newCalledArr = theData.data; //更新的 已呼
      if (this.isStart) {
        //第一次显示
        this.waitArr = this.newWaitArr;
        this.calledArr = this.newCalledArr;
        // this.disWaited();
        // this.genCalled(this.calledArr); //已呼未做，数据也会变化
        this.isStart = false;
        this.genDisplayArr();
      }
    },
    websockonclose: function() {
      window.alert("Socket 关闭");
      window.console.log("Socket 关闭");
      window.location.reload();  //重连？？？
    },
    genDisplayArr: function() {
      this.displayArr = [];
      if (this.waitArr.length == 0) {
        for (let i = 0; i < this.rowCount; i++) {
          this.displayArr.push({});
        }
        return;
      }

      if (this.showIndex >= this.waitArr.length) {
        this.showIndex = 0;
        this.isOver = true;
        for (let i = 0; i < this.rowCount; i++) {
          this.displayArr.push({});
        }
      }

      if (this.waitArr.length - this.showIndex <= this.rowCount) {
        for (let i = this.showIndex; i < this.waitArr.length; i++) {
          this.displayArr.push(this.waitArr[i]);
        }
        for (let j = this.displayArr.length; j < this.rowCount; j++) {
          this.displayArr.push({});
        }
        this.showIndex = 0;
        this.isOver = true;
      } else {
        for (let j = this.showIndex; j < this.showIndex + this.rowCount; j++) {
          this.displayArr.push(this.waitArr[j]);
        }
        this.showIndex = this.showIndex + this.rowCount;
        this.isOver = false;
      }
      if (this.isOver) {
        //循环完一次，更新数据
        this.waitArr = this.newWaitArr;
        this.calledArr = this.newCalledArr;
        this.isOver = false;
      }
    }
  }
};
</script>

<style>
html,
body,
ul,
li,
p,
img {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

#app {
  width: 960px;
  height: 540px;
}
.inputCls {
  display: inline;
}
</style>
