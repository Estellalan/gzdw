<template>
    <div ref="myChart2" id="myChart2" :style="{ width: auto, height: '350px' }"></div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
    setup() {
        // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
        let internalInstance = getCurrentInstance();
        let echarts = internalInstance.appContext.config.globalProperties.$echarts;

        onMounted(() => {
            const dom = document.getElementById('myChart2');
            const myChart = echarts.init(dom); // 初始化echarts实例
            var option;

            option = {
                
                xAxis: {
                    name: '新能源电站节点编号',
                    nameLocation:'center',
                    nameTextStyle:{
                        padding: [20,0,0,0] 
                    },
                    type: 'category',
                    data: [1, 2, 3, 4, 5, 6, 7]

                },
                yAxis: {
                    name: '消纳率%',
                    type: 'value'
                },
                series: [
                    {
                        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                        type: 'bar'
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