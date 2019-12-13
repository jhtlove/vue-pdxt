<template>
    <div class="header">
        <div class="left-text">等待检查</div>
        <div class="right-text">温馨提示</div>
    </div>
</template>

<script>
export default {
    name:"Header"
};
</script>

<style scoped>
.header{
    /*margin-top: 4px;*/
    padding-top:1px;
    /*height:80px;*/
    background-color: #00bbee;
    /*border: 1px solid white;*/
    /*0099cc*/
   /*background-color: #cccccc;*/
    /*flex-grow: 1;*/

    display: flex;
}
.left-text{
    /*居中 auto*/
    /*margin: 1px ;*/
     margin: 2px 2px 0 2px;

    height:58px;
    line-height: 58px;
    /*width:1008px;*/
    width: 60%;

    background-color: #ccc;
    font-size: 36px;
    /*font-weight: bold;*/
    border-radius: 50px;
    text-align: center;
    color:#00f;
}
.right-text{
    margin: 2px 2px 0 2px;
    height:58px;
    line-height: 58px;
    flex-grow: 1;

    background-color: #ccc;
    font-size: 36px;
    /*font-weight: bold;*/
    border-radius: 50px;
    text-align: center;
    color:#00f;

}
</style>