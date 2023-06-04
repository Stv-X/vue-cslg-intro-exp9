<template>
    <div class="navigationBar">
        <img class="navigationTitle" src="../assets/cslgLogo.png">
    </div>
    <TabNavigation />
</template>

<script>
import TabNavigation from './TabNavigation.vue';

export default {
    name: 'NavigationBar',
    components: {
        TabNavigation
    }
}
</script>

<style scoped>
.navigationBar {
    background-color: rgb(165, 41, 42);
    padding: 10px 20px;
    display: flex;
    align-items: center;
}

.navigationTitle {
    height: 40px;
}
</style>