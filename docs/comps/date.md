# xn-date
对日期[Element-DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker)二次封装，目前只支持部分特性，后续会按需支持。

``` html javascript
<template>
    <xn-date
        v-model="value"
        clearable
        is-shortcut
        @on-change="onChangeDate"
        @on-format="onChangeDateFormat"
    />
</template>
<script>
    export default {
        data(){
            return {
                value:''
            }
        },
        methods:{
            onChangeDate(val) {
                console.log(val)
            },
            onChangeDateFormat(val){
                console.log(val)
            }
        }
    }
</script>
```



#### 属性
---
<api :list="list"></api>

 #### 事件
 ---
 <api :list="list1"></api>

<script>
   export default {
        data(){
            return {
                list:[
                    {query:'v-model',desc:'绑定的数据',type:'array',options:'-',default:'-'},
                    {query:'is-shortcut',desc:'是否显示快捷栏',type:'boolean',options:'true/false',default:'true'},
                    {query:'dsiabled',desc:'是否禁用',type:'boolean',options:'true/false',default:'true'},
                    {query:'readonly',desc:'是否只读',type:'boolean',options:'true/false',default:'true'},
                    {query:'type',desc:'显示类型',type:'string',options:'year/month/date/week/datetime/datetimerange/daterange',default:'daterange'},
                    
                ],
                list1:[
                    {query:'on-change',desc:'选择日期',type:'function',options:'-',default:'-'},
                    
                    {query:'on-format',desc:'选择日期（会返回一个start，end的对象）',type:'function',options:'-',default:'-'},
                ]
            }
        }
    }
</script>