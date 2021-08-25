# xn-table
对表格[Element-Table](https://element.eleme.cn/#/zh-CN/component/table)二次封装，目前只支持部分特性，后续会按需支持。

默认支持了最大高度，并且增加了`v-auto-height`指令，以便更好的适配不同的窗口大小。

``` html javascript
<template>
    <xn-table :data="list" selection :columns="headerColumns">
        ...
    </xn-table>
</template>
<script>
    export default {
        data(){
            return {
                headerColumns: [
                    { prop: 'id', label: '字段1' },
                    { label: '操作', fixed: 'right', width: '150px,', more: {
                        options: [
                            { label: '按钮1', methods: 'handleClick1', icon: 'el-icon-delete' },
                            { label: '按钮1', methods: 'handleClick1', icon: 'el-icon-delete' }
                        ]
                    }}
                ],
            }
        },
        methods:{
            handleBtn(row) {
                console.log(row) //handleClick1
            },
        }
    }
</script>
```
默认采用render写法，也可以通过`slot`常规写法


#### 属性

<api :list="list"></api>
 
 #### 事件

 <script>
   export default {
        data(){
            return {
                list:[
                    {query:'data',desc:'显示的数据',type:'array',options:'-',default:'-'},
                    {query:'columns',desc:'表头',type:'array',options:'-',default:'-'},
                    {query:'v-auth-height',desc:'自适应高度',type:'number',options:'-',default:'95'},
                    {query:'max-height',desc:'最大高度（如果开启v-auth-height，自动计算）',type:'number',options:'-',default:'0'},
                    {query:'show-page',desc:'是否显示分页',type:'boolean',options:"true,false",default:'true'},
                    {query:'index',desc:'是否显示行号',type:'boolean',options:"true,false",default:'true'},
                    {query:'selection',desc:'是否显示选择框',type:'boolean',options:"true,false",default:'false'}
                ]
            }
        }
    }
</script>