<template>
  <div>{{timeText}}</div>
</template>

<script>
export default {
  name: "Timer",
  data: function() {
    return {
      timeText: ""
    };
  },
  mounted() {
    this.timeText = this.genTimeText();
    let _this = this;
    this.timer = setInterval(() => {
      _this.timeText = this.genTimeText();
    }, 5000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    genTimeText: function() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var day = today.getDate();
      var hour = today.getHours();
      var minute = today.getMinutes();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour > 0 && hour < 10) {
        hour = "0" + hour;
      }
      if (minute > 0 && minute < 10) {
        minute = "0" + minute;
      }
      return (
        year + "年" + month + "月" + day + "日 " + hour + "时" + minute + "分"
      );
    }
  }
};
</script>

<style scoped>
</style>