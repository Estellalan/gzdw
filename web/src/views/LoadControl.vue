<template>
    <ContentField>
        <ContentField>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary" type="button">导入电网数据</button>
                <button class="btn btn-primary" type="button">导入运行数据</button>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MyModal">
                    运行评估
                </button>

                <!-- Modal -->
                <div class="modal fade" id="MyModal" tabindex="-1" aria-labelledby="MyModal"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">运行评估</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                已生成负荷调控结果
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                <button type="button" class="btn btn-primary" @click="goResults">查看</button>
                            </div>
                        </div>
                    </div>
                </div>
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
import { useRouter } from 'vue-router';

import { Modal } from 'bootstrap/dist/js/bootstrap'

export default {
    components: {
        ContentField, CoolChart

    },
    setup() {
        const router = useRouter();

        function goResults() {
            //alert("跳转")
            Modal.getInstance("#MyModal").hide();
            router.push({path:'/results'})
        }

        return {
            goResults,
        }
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