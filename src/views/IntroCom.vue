<template>
    <div>
        <h3> 欢迎报考常熟理工学院 </h3>
        <img style="width: 100%; object-fit: cover;" :src="localImage">

        <div class="scrollable-text" style="text-align: left; text-indent: 2em;">
            <div v-for="paragraph in introduction" :key="paragraph"> {{ paragraph }} </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroCom',
    data() {
        return {
            introduction: [
                "常熟理工学院坐落于人文荟萃、山明水秀的国家历史文化名城、国际花园城市——苏州常熟，是省市共建省属公立全日制普通本科院校。学校前身是创建于1958年的苏州师范专科学校，1989年，苏州师范专科学校与常熟职业大学合并，成立常熟高等专科学校。2001年江苏省人口学校并入。2004年，经教育部批准升本，更名为常熟理工学院。学校是“国家教育体制改革”试点项目高校、国家“十三五”应用型本科产教融合发展工程项目建设高校、国家“十四五”教育强国推进工程储备院校、教育部“卓越工程师教育培养计划”试点高校、全国高校质量保障机构联盟副理事长单位。",
                "六十多年办学历程中，学校始终扎根苏州、深耕常熟，坚定不移地贯彻落实省市共建办学机制，坚定不移地坚持校地合作，坚定不移地坚持融合发展，为国家和社会培养了十二万多名各类人才。升本以来，全体常熟理工人在“立本求真、日新致远”校训的指引下，励精图治，艰苦创业，发扬“反对平庸、追求卓越，负重奋进、敢于超越”的校园精神，凝心聚力谋发展，真抓实干创一流，走出了一条具有自身特色的发展道路。"
            ]
        };
    },
    computed: {
        localImage() {
            return require('../assets/intro.jpg');
        }
    }
};
</script>

<style>
.scrollable-text {
    height: 200px;
    overflow-y: scroll;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
}
</style>
