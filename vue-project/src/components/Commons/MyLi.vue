<template>
  <li>
      <!--显示首页九宫格或者图片分享  -->
      <slot></slot>
  </li>
</template>

<script>
export default {
    name:'my-li'
}
</script>

<style scoped>
li{
float: left;
height:20%;
line-height: 218px;   
width: 33%;
margin: 1 1 0 0;
text-align: center; 
position: relative;
}
</style>
