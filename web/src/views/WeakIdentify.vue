<template>
    <ContentField>
        <div class="row">
            <div class="col-sm-8 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-header">新能源消纳率可视化图(左)与线路传输容量可视化图(右)</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <div class="card">
                                    <div class="card-body">
                                        <BarChartForWeak />

                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <LineChart />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary">运行</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-header">可调柔性负荷节点编号排序图</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 mb-3 mb-sm-0">
                                <div class="card">
                                    <div class="card-body">
                                        <BarChartForNum />

                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        <a href="#" class="btn btn-primary">运行</a>
                    </div>
                </div>
            </div>
        </div>
    </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField'
import BarChartForWeak from '@/components/ChartModule/BarChartForWeak'
import BarChartForNum from '@/components/ChartModule/BarChartForNum'
import LineChart from '@/components/ChartModule/LineChart'
export default {
    components: {
        ContentField, BarChartForWeak, BarChartForNum, LineChart,
    },
    setup() {

    }
}
</script>

<style scoped>
button {
    width: 100%;
}

div.error-message {
    color: red;
}

.btn {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
}
</style>