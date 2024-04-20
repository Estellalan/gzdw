<template>
    <div ref="myChart" id="myChart" :style="{ width: auto, height: '350px' }"></div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
    setup() {
        // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
        let internalInstance = getCurrentInstance();
        let echarts = internalInstance.appContext.config.globalProperties.$echarts;

        onMounted(() => {
            const dom = document.getElementById('myChart');
            const myChart = echarts.init(dom); // 初始化echarts实例
            var option;

            option = {
                xAxis: {
                    name: '线路(n)',
                    nameLocation:'center',
                    nameTextStyle:{
                        padding: [20,0,0,0] 
                    },
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

                },
                yAxis: {
                    name: 'S(MVA)',
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'line'
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