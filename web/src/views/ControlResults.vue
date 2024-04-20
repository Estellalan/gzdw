<template>
    <ContentField>
        <div class="row">

            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-header">负荷价格调控结果</div>
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
                        <button class="btn btn-primary" type="button">运行</button>
                        
                    </div>
                </div>
            </div>

            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-header">负荷直接调控结果</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 mb-3 mb-sm-0">
                                <div class="card">
                                    <div class="card-body">
                                        <BarChartForWeak />

                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        <button class="btn btn-primary" type="button">运行</button>
                    </div>
                </div>
            </div>

            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-header">负荷多元联动调控成本</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 mb-3 mb-sm-0">
                                <div class="card">
                                    <div class="card-body">
                                        <LineChart />

                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        <button class="btn btn-primary" type="button">运行</button>
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