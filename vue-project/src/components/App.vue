<template>
    <div>
        <!-- 头部 -->
        <mt-header title="购物专栏"></mt-header>
        <!-- 中间内容 -->
        <router-view></router-view>
        <!-- 底部 -->
        <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="../static/img/index.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="member">
                <img slot="icon" src="../static/img/vip.png">
                会员
            </mt-tab-item>
            <mt-tab-item id="shopcart">
                <img slot="icon" src="../static/img/shopcart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="../static/img/find.png">
                查找
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected:'',
        }
    },
    watch:{
        selected(newV){
            // id与name一致，选中之后让锚点值改变
            this.$router.push({
                name:newV
            });
        }
    }
}
</script>

<style scoped>
    .mint-tabbar {
        position: fixed;
        bottom:0;
    }
</style>
