<!--
 * @Author: Ashley.Liu
 * @Date: 2022-04-11 10:11:12
 * @LastEditTime: 2022-04-11 11:03:06
 * @Description: desc
-->
<template>
  <div id="category-app">
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
    <p>11111111111111111</p>
  </div>
</template>

<script>
export default {
 created(){
   setTimeout(()=>{
     console.log(this.$GlobalState.state)
    let testComuni = this.$GlobalState.state
    testComuni.testCommunication = '234'
    this.$GlobalState.setGlobalState(testComuni)
   }, 2000)

 }
}
</script>

<style>

</style>