<template>
    <div>
        <div v-if="isPresentingCollegeDetail">
        <h4 style="text-align: left; margin: 10px 10px;">学院概况</h4>
        <div style="text-align: left; text-indent: 2em; padding: 0 10px;">{{ intro }}</div>
        </div>

        <h4 v-if="isPresentingCollegeDetail" style="text-align: left; margin: 10px 10px;">招生专业</h4>
        <van-grid v-if="isPresentingCollegeDetail" :column-num="3" :center="false">
            <van-grid-item v-for="major in majors" :key="major">
                <router-link :to="'/colleges/fz/' + major.path" @click="hideCollegeDetail">
                    <span class="listText">{{ major.name }}</span>
                </router-link>
            </van-grid-item>
        </van-grid>

        <router-view @hook:activated="activate"></router-view>
    </div>
</template>

<script>
export default {
    name: "FZCollege",
    data() {
        return {
            intro: "纺织服装与设计学院办学历史可追溯到上世纪七十年代。1990年成立工艺美术系，自此开始面向全省招生。1990年至2005年连续15年招收艺术设计专业学生， 1991年至1998年在连续8年招收美术学专业学生基础上，2000年开始招收本科学生，2019年12月更名为纺织服装与设计学院。学院在50多年的发展过程中，根据社会需求陆续增设了相关专业，现有2个二级学科，6个专业，形成了多学科专业交叉，“艺工融合、融入业界”的办学特色。学院大力进行学科研究，加强专业建设，重视师资队伍培育，多年来培养了一大批适应社会需求的高素质应用型人才，为服务地方社会经济、文化发展做出了贡献，多次获选行业人才培养示范院校等荣誉，赢得了良好的社会声誉。",
            isPresentingCollegeDetail: true,
            majors: [
                {
                    name: "纺织工程",
                    path: "0",
                },
                {
                    name: "服装设计与工程",
                    path: "1",
                },
                {
                    name: "服装设计与工程（单招）",
                    path: "2",
                },
                {
                    name: "服装与服饰设计",
                    path: "3",
                },
                {
                    name: "产品设计",
                    path: "4",
                },
                {
                    name: "视觉传达设计",
                    path: "5",
                },
                {
                    name: "环境设计",
                    path: "6",
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