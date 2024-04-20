<template>
    <div ref="myChart1" id="myChart1" :style="{ width: auto, height: '350px' }"></div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
    setup() {
        // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
        let internalInstance = getCurrentInstance();
        let echarts = internalInstance.appContext.config.globalProperties.$echarts;

        onMounted(() => {
            const dom = document.getElementById('myChart1');
            const myChart = echarts.init(dom); // 初始化echarts实例
            var option;

            option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['响应前', '响应后']
                },
                xAxis: [
                    {
                        name: '新能源节点编号',
                        nameLocation: 'center',
                        nameTextStyle: {
                            padding: [20, 0, 0, 0]
                        },
                        type: 'category',
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    }
                ],
                yAxis: [
                    {
                        name: '新能源消纳率（%）',
                        nameTextStyle: {
                            padding: [0, 0, 0, 100]
                        },
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '响应前',
                        type: 'bar',
                        data: [
                            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                        ],

                    },
                    {
                        name: '响应后',
                        type: 'bar',
                        data: [
                            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                        ],

                    }
                ]
            };
            // 设置实例参数
            myChart.setOption(option);
        });
        return {};
    }
};
</script>