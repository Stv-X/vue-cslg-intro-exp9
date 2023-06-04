<template>
    <div>
        <van-tabs route>
            <van-tab title="学校简介" to="/"></van-tab>
            <van-tab title="校园风光" to="/view"></van-tab>
            <van-tab title="校训校风" to="/culture"></van-tab>
            <van-tab title="领导关怀" to="/leadership"></van-tab>
            <van-tab title="院系专业" to="/colleges"></van-tab>
        </van-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'TabNavigation'
}
</script>

<style scoped>
::v-deep .van-tabs__line {
    background-color: rgb(165, 41, 42);
}
</style>