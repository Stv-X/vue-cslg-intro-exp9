<template>
    <div>
        <van-nav-bar v-if="isPresentingDetail" :title="title" :left-arrow="true" left-text="返回" @click-left="goBack" />
        <van-grid v-else :column-num="2">
            <van-grid-item v-for="(college, index) in colleges" :key="index" :text="college.label" @click="hideTabs"
                :to="'/colleges/' + college.path" class="gridItem"></van-grid-item>
        </van-grid>
        <router-view v-if="isPresentingDetail"></router-view>
    </div>
</template>

<script>
export default {
    name: "CollegesCom",
    data() {
        return {
            isPresentingDetail: false,
            colleges: [
                {
                    label: "师范学院",
                    path: "sf",
                },
                {
                    label: "外国语学院",
                    path: "wgy",
                },
                {
                    label: "纺织服装与设计学院",
                    path: "fz",
                },
                {
                    label: "生物与食品工程学院",
                    path: "",
                },
                {
                    label: "计算机科学与工程学院",
                    path: "jsj",
                },
                {
                    label: "电子信息工程学院",
                    path: "",
                },
                {
                    label: "数学与统计学院",
                    path: "",
                },
                {
                    label: "材料工程学院",
                    path: "",
                },
                {
                    label: "机械工程学院",
                    path: "",
                },
                {
                    label: "电气与自动化工程学院",
                    path: "",
                },
                {
                    label: "商学院",
                    path: "",
                },
                {
                    label: "汽车工程学院",
                    path: "",
                },
            ],
        };
    },
    computed: {
        title() {
            const path = this.$route.path;
            const parts = path.split("/");
            if (parts.length === 4 && !isNaN(parts[3])) {
                switch (parts[2]) {
                    case "sf":
                        switch (parts[3]) {
                            case "0":
                                return "汉语言文学（师范）";
                            case "1":
                                return "秘书学";
                            case "2":
                                return "小学教育（师范）";
                            case "3":
                                return "学前教育（师范）";
                            case "4":
                                return "音乐学（师范）";
                        }
                        break;
                    case "wgy":
                        switch (parts[3]) {
                            case "0":
                                return "英语（师范）";
                            case "1":
                                return "英语";
                            case "2":
                                return "日语";
                            case "3":
                                return "德语";
                        }
                        break;
                    case "fz":
                        switch (parts[3]) {
                            case "0":
                                return "纺织工程";
                            case "1":
                                return "服装设计与工程";
                            case "2":
                                return "服装设计与工程（单招）";
                            case "3":
                                return "服装与服饰设计";
                            case "4":
                                return "产品设计";
                            case "5":
                                return "视觉传达设计";
                            case "6":
                                return "环境设计";
                        }
                        break;
                        case "jsj":
                        switch (parts[3]) {
                            case "0":
                                return "计算机科学与技术";
                            case "1":
                                return "数字媒体技术";
                            case "2":
                                return "物联网工程";
                            case "3":
                                return "软件工程";
                            case "4":
                                return "数据科学与大数据技术";
                        }
                        break;
                    }
            } else if (parts.length === 3) {
                for (let index = 0; index < this.colleges.length; index++) {
                    const college = this.colleges[index];
                    if (parts[2] == college.path) {
                        return college.label;
                    }
                }
            }
            return "";
        }
    },
    methods: {
        hideTabs() {
            this.isPresentingDetail = true;
        },
        showTabs() {
            this.isPresentingDetail = false;
        },
        goBack() {
            this.$router.push('/colleges')
            this.showTabs();
        },
    },
};
</script>

<style scoped>
.gridItem {
    font-size: large;
}

::v-deep .van-nav-bar .van-icon {
    color: rgb(165, 41, 42);
}

::v-deep .van-nav-bar__text {
    color: rgb(165, 41, 42);
}
</style>
