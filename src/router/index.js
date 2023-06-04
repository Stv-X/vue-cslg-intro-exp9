import { createRouter, createWebHashHistory } from "vue-router";

import IntroComVue from "@/views/IntroCom.vue";
import ViewComVue from "@/views/ViewCom.vue";
import CultureComVue from "@/views/CultureCom.vue";
import LeadershipComVue from "@/views/LeadershipCom.vue";
import CollegesComVue from "@/views/CollegesCom.vue";

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                component: IntroComVue
            },
            {
                path: '/view',
                component: ViewComVue
            },
            {
                path: '/culture',
                component: CultureComVue
            },
            {
                path: '/leadership',
                component: LeadershipComVue
            },
            {
                path: '/colleges',
                component: CollegesComVue,
                children: [
                    {
                        path: 'sf',
                        component: () => import('@/components/CollegesDetail/SFCollege.vue'),
                        children: [
                            {
                                path: '0',
                                component: () => import('@/components/CollegesDetail/SFMajors/MajorChinese.vue')
                            },
                            {
                                path: '1',
                                component: () => import('@/components/CollegesDetail/SFMajors/MajorSecretary.vue')
                            },
                            {
                                path: '2',
                                component: () => import('@/components/CollegesDetail/SFMajors/MajorPrimary.vue')
                            },
                            {
                                path: '3',
                                component: () => import('@/components/CollegesDetail/SFMajors/MajorPreschool.vue')
                            },
                            {
                                path: '4',
                                component: () => import('@/components/CollegesDetail/SFMajors/MajorMusic.vue')
                            }

                        ]
                    },
                    {
                        path: 'wgy',
                        component: () => import('@/components/CollegesDetail/WGYCollege.vue'),
                        children: [
                            {
                                path: '0',
                                component: () => import('@/components/CollegesDetail/WGYMajors/MajorEnglishE.vue')
                            },
                            {
                                path: '1',
                                component: () => import('@/components/CollegesDetail/WGYMajors/MajorEnglish.vue')
                            },
                            {
                                path: '2',
                                component: () => import('@/components/CollegesDetail/WGYMajors/MajorJapanese.vue')
                            },
                            {
                                path: '3',
                                component: () => import('@/components/CollegesDetail/WGYMajors/MajorGerman.vue')
                            }
                        ]
                    },
                    {
                        path: 'fz',
                        component: () => import('@/components/CollegesDetail/FZCollege.vue'),
                        children: [
                            {
                                path: '0',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorTextileEng.vue')
                            },
                            {
                                path: '1',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorClothingDsnEng.vue')
                            },
                            {
                                path: '2',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorClothingDsnEngIE.vue')
                            },
                            {
                                path: '3',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorClothingDsn.vue')
                            },
                            {
                                path: '4',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorProductDsn.vue')
                            },
                            {
                                path: '5',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorVisualDsn.vue')
                            },
                            {
                                path: '6',
                                component: () => import('@/components/CollegesDetail/FZMajors/MajorEnvDsn.vue')
                            },
                        ]
                    },
                    {
                        path: 'jsj',
                        component: () => import('@/components/CollegesDetail/JSJCollege.vue'),
                        children: [
                            {
                                path: '0',
                                component: () => import('@/components/CollegesDetail/JSJMajors/MajorComputerScience.vue')
                            },
                            {
                                path: '1',
                                component: () => import('@/components/CollegesDetail/JSJMajors/MajorDigitalMedia.vue')
                            },
                            {
                                path: '2',
                                component: () => import('@/components/CollegesDetail/JSJMajors/MajorIoTEng.vue')
                            },
                            {
                                path: '3',
                                component: () => import('@/components/CollegesDetail/JSJMajors/MajorSoftwareEng.vue')
                            },
                            {
                                path: '4',
                                component: () => import('@/components/CollegesDetail/JSJMajors/MajorBigData.vue')
                            },
                        ]
                    }
                ]
            },
        ]
    }
);

export default router;