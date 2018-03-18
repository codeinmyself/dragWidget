<template>
    <transition name="slide-right">
        <div v-if="sortApi.length > 0 && editShow === true">
            <el-tabs v-model="activeName">
                <el-tab-pane label="组件设置" name="first">
                    <div v-for="(appUi,index) in sortApi" :is="appUi.component+'Edit'" :content="appUi.content" :oStyle="appUi.style" :editPartShow="appUi.editPartShow" :aIndex="index" :currentIndex="editIndex" :key="appUi.content.code">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="样式设置" name="second">
                    <el-collapse v-model="colorPicker.name" class="base-edit"  accordion>
                        <el-collapse-item class="tititt" :title="colorPicker.type" :name="colorPicker.type">
                            <el-form ref="form" :model="colorPicker" size="mini">
                                <el-form-item class="cui-inline-reset" v-for="(item,index) in colorPicker.content" :label="item.title" :key="item.style">
                                    <el-color-picker @active-change=" (value) => setStyle(value,item.style)" v-model="sortApi[editIndex].style[item.style]" show-alpha>
                                    </el-color-picker>
                                    <span class="black-text-shadow" :style="{color: sortApi[editIndex].style[item.style]}">
                                        {{ sortApi[editIndex].style[item.style] }}
                                    </span>
                                </el-form-item>
                            </el-form>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
            </el-tabs>
        </div>
    </transition>
</template>
<script>
    import { mapState,mapMutations } from 'vuex';
    //这里我将组建特有的编辑栏，写成了一个组件，为什么不写在相应的组件一起了？
    //这里必须说明一下，主要是我没有想到方法，让他在同一组件内分离出来，单独将dom结构放在编辑栏这里，如果有大神知道
    //还望不吝赐教
    import BtnEdit from "@/components/BtnEdit.vue";
    
    export default{
        name: 'BaseEdit',
        components: {
          BtnEdit
        },
        data(){
            return{
                colorPicker: {
                    type: '颜色设置',
                    name: 'Picker',
                    content:[
                        {
                            title: '背景颜色',
                            style: 'background'
                        },
                        {
                            title: '字体颜色',
                            style: 'color'
                        }
                    ]
                    
                },
                activeName: 'first'
            }
        },
        
        computed:{
            ...mapState(['editIndex','sortApi','editShow'])
        },
        methods:{
            setStyle(value,style){
                //根据上面传入的style属性，实时改变现有的值
                this.$set(this.sortApi[this.editIndex].style,style,value);
            }
        }
    }
</script>