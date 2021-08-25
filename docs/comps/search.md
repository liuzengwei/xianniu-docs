# xn-search

对列表页的搜索进行了封装。

``` html javascript
<template>
    <xn-search
        :form-data="formTypeData"
        @on-search="onSearch"
        @on-reset="onReset"
    />
</template>
<script>
    export default {
        data(){
            return {
                formData: [
                    {
                        label: '名称',
                        placeholder: '请输入要查询的公司名称',
                        type: 'input',
                        prop: 'name'
                    },
                    {
                        label: '合同类型',
                        placeholder: '请选择合同类型',
                        type: 'select',
                        data: [
                            { label: '执行中', value: 10 },
                            { label: '已结束', value: 20 }
                        ],
                        prop: 'status'
                    },
                    {
                        label: '日期',
                        placeholder: '日期',
                        type: 'date',
                        prop: 'date',
                        options: {
                            start: 'startDate',
                            end: 'endDate'
                        }
                    }
                ]
            }
        },
        methods:{
            onSearch(value) {
                console.log(value)
            },
            onReset(value){
                console.log(value)
            }
        }
    }
</script>
```


#### 属性

<api :list="list"></api>


 
#### formData

<api :list="formData"></api>


#### 事件

<api :list="event"></api>

<script>
   export default {
        data(){
            return {
                list:[
                    {query:'formData',desc:'要显示的数据',type:'array',options:'见下方formData属性',default:'-'},
                    {query:'labelWidth',desc:'表单项label宽度',type:'string',options:'-',default:'80px'},
                ],
                formData:[
                    {query:'label',desc:'标签文本',type:'string',options:'',default:'-'},
                    {query:'placeholder',desc:'输入框占位',type:'string',options:'',default:'-'},
                    {query:'type',desc:'表单类型',type:'string',options:'input/select/date',default:'-'},
                    {query:'prop',desc:'表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',type:'string',options:'传入 Form 组件的 model 中的字段',default:'-'},
                    {query:'data',desc:'表单的数据源（例：select的下拉数据）',type:'array',options:'-',default:'-'},
                    {query:'options',desc:'一些表单配置（例：选择日期，接口需要的字段{start:需要的字段,end:需要的字段}）',type:'object',options:'-',default:'-'},
                ],
                event:[
                    {query:'on-search',desc:'触发搜索',type:'function',options:'-',default:'-'},
                    {query:'on-reset',desc:'重置搜索表单',type:'function',options:'-',default:'-'},
                ]
            }
        }
    }
</script>