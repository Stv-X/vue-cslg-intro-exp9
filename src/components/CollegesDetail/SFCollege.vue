<template>
    <div>
        <div v-if="isPresentingCollegeDetail">
        <h4 style="text-align: left; margin: 10px 10px;">学院概况</h4>
        <div style="text-align: left; text-indent: 2em; padding: 0 10px;">{{ intro }}</div>
        </div>

        <h4 v-if="isPresentingCollegeDetail" style="text-align: left; margin: 10px 10px;">招生专业</h4>
        <van-grid v-if="isPresentingCollegeDetail" :column-num="3" :center="false">
            <van-grid-item v-for="major in majors" :key="major">
                <router-link :to="'/colleges/sf/' + major.path" @click="hideCollegeDetail">
                    <span class="listText">{{ major.name }}</span>
                </router-link>
            </van-grid-item>
        </van-grid>

        <router-view @hook:activated="activate"></router-view>
    </div>
</template>

<script>
export default {
    name: "SFCollege",
    data() {
        return {
            intro: "师范学院的前身是2008年6月学校新一轮系科重组时建立的人文学院。2019年12月，为顺应国家教师教育人才培养需要，学校将人文学院改名为“师范学院”，专注师范类专业人才培养，秉承常熟理工学院六十多年师范教育传统，创新教师教育特色。学院以培养具有“大和·大气·大爱”的师范气质、突出的教育教学技能和教育创新能力的未来卓越教师为目标，以“面向儿童、服务儿童、发展儿童”为宗旨，在同类院校中具有鲜明特色和较高办学水平。",
            isPresentingCollegeDetail: true,
            majors: [
                {
                    name: "汉语言文学（师范）",
                    path: "0",
                },
                {
                    name: "秘书学",
                    path: "1",
                },
                {
                    name: "小学教育（师范）",
                    path: "2",
                },
                {
                    name: "学前教育（师范）",
                    path: "3",
                },
                {
                    name: "音乐学（师范）",
                    path: "4",
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