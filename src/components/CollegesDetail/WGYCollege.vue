<template>
    <div>
        <div v-if="isPresentingCollegeDetail">
        <h4 style="text-align: left; margin: 10px 10px;">学院概况</h4>
        <div style="text-align: left; text-indent: 2em; padding: 0 10px;">{{ intro }}</div>
        </div>

        <h4 v-if="isPresentingCollegeDetail" style="text-align: left; margin: 10px 10px;">招生专业</h4>
        <van-grid v-if="isPresentingCollegeDetail" :column-num="2" :center="false">
            <van-grid-item v-for="major in majors" :key="major">
                <router-link :to="'/colleges/wgy/' + major.path" @click="hideCollegeDetail">
                    <span class="listText">{{ major.name }}</span>
                </router-link>
            </van-grid-item>
        </van-grid>

        <router-view @hook:activated="activate"></router-view>
    </div>
</template>

<script>
export default {
    name: "WGYCollege",
    data() {
        return {
            intro: "外国语学院有着丰润的历史传承和深厚的文化底蕴，60多年来，为社会培养了近万名高素质应用型外语人才，其中不乏师德优良、教书育人的一线园丁，出类拔萃、奋力市场的商界精英，学识渊博、享誉学界的专家教授！",
            isPresentingCollegeDetail: true,
            majors: [
                {
                    name: "英语（师范）",
                    path: "0",
                },
                {
                    name: "英语",
                    path: "1",
                },
                {
                    name: "日语",
                    path: "2",
                },
                {
                    name: "德语",
                    path: "3",
                },
            ],
        };
    },
    methods: {
        showCollegeDetail() {
            this.isPresentingCollegeDetail = true;
        },
        hideCollegeDetail() {
            this.isPresentingCollegeDetail = false;
        },
    }
};
</script>

<style scoped>
.listText {
    color: black;
    padding: 20px 0;
    font-size: 14px;
    text-align: left;
}
</style>