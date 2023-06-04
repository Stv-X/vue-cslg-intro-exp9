<template>
    <div>
        <div v-if="isPresentingCollegeDetail">
        <h4 style="text-align: left; margin: 10px 10px;">学院概况</h4>
        <div style="text-align: left; text-indent: 2em; padding: 0 10px;">{{ intro }}</div>
        </div>

        <h4 v-if="isPresentingCollegeDetail" style="text-align: left; margin: 10px 10px;">招生专业</h4>
        <van-grid v-if="isPresentingCollegeDetail" :column-num="3" :center="false">
            <van-grid-item v-for="major in majors" :key="major">
                <router-link :to="'/colleges/jsj/' + major.path" @click="hideCollegeDetail">
                    <span class="listText">{{ major.name }}</span>
                </router-link>
            </van-grid-item>
        </van-grid>

        <router-view @hook:activated="activate"></router-view>
    </div>
</template>

<script>
export default {
    name: "JSJCollege",
    data() {
        return {
            intro: "计算机科学与工程学院在校全日制本科生近2000人，与中国矿大、苏州大学、东北石油大学、苏州科技大学、北方民族大学、湖州师范学院等联合培养在校全日制硕士研究生近30人。学院教职工总数111人，其中正高级职称14人，副高级职称42人，博士44人，兼职博士生导师2人、硕士生导师18人。学院下设计算机科学与技术、软件工程、数字媒体技术、物联网工程、数据科学与大数据技术五个全日制本科专业。其中计算机科学与技术专业为国家一流本科专业建设点、国家级卓越工程师人才培养试点专业、江苏省一流本科专业建设点和江苏省特色专业；物联网工程为江苏省一流本科专业建设点；软件工程专业为江苏省卓越工程师人才培养试点专业；计算机科学与技术、软件工程、数字媒体技术专业为江苏省高等学校重点建设专业类。此外，面向产业需求成立了人工智能技术学院。",
            isPresentingCollegeDetail: true,
            majors: [
                {
                    name: "计算机科学与技术",
                    path: "0",
                },
                {
                    name: "数字媒体技术",
                    path: "1",
                },
                {
                    name: "物联网工程",
                    path: "2",
                },
                {
                    name: "软件工程",
                    path: "3",
                },
                {
                    name: "数据科学与大数据技术",
                    path: "4",
                }
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