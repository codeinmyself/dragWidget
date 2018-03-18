
<template>
    <div class="btn-box ui-sortable" :data-code="content.code">
        <el-button class="ui-btn"
            :style="oStyle">
            {{ content.text }}
        </el-button>
        
        <DeleteCp :aIndex="aIndex"></DeleteCp>
    </div>
</template>
<script>
//按钮组件，其实里面很简单
//组件的对应的编辑组件，里面内容和这个也差不多，下面就不写了
//因为每个组件都有删除功能，所以写成了一个组件
    import DeleteCp from "@/components/DeleteCp";
    export default {
        name: 'Btn',
        props: { //父组件传入的参数
            content: Object,
            oStyle: Object,
            aIndex: Number
        },
        components: {
            DeleteCp
        },
        data(){
            return{
                btnModel: 'btn-model'
            }
        }
    }
</script>