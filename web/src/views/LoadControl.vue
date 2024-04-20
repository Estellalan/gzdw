<template>
    <ContentField>
        <ContentField>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary" type="button">导入电网数据</button>
                <button class="btn btn-primary" type="button">导入运行数据</button>
                <button class="btn btn-primary" type="button">运行评估</button>
            </div> 
        </ContentField>
        
        <ContentField>
            <CoolChart></CoolChart>
        </ContentField>
    </ContentField>
</template>

<script>

import ContentField from '@/components/ContentField'
import CoolChart from '@/components/ChartModule/CoolChart'

export default {
    components: {
        ContentField,CoolChart
        
    },
    setup() {

    }
}
</script>

<style scoped>
button {
    width: 15%;
    margin: 0 auto;
    display: block;
}

div.error-message {
    color: red;
}
</style>