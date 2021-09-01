# xn-table
对表格[Element-Table](https://element.eleme.cn/#/zh-CN/component/table)二次封装，目前只支持部分特性，后续会按需支持。

默认支持了最大高度，并且增加了`v-auto-height`指令，以便更好的适配不同的窗口大小。

``` html javascript
<template>
    <xn-table :data="list" index selection :columns="headerColumns" @handle-buttons="onMore">
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
                            { label: '按钮1', method: 'handleClick1', icon: 'el-icon-delete' },
                            { label: '按钮1', method: 'handleClick1', icon: 'el-icon-delete' }
                        ]
                    }}
                ],
            }
        },
        methods:{
            onMore({method,row,idx}) {
                
            },
        }
    }
</script>
```
默认采用render写法，也可以通过`slot`常规写法


#### 属性

<api :list="list"></api>
 
 #### 事件

<api :list="list1"></api>

 <script>
   export default {
        data(){
            return {
                list:[
                    {query:'data',desc:'显示的数据',type:'array',options:'-',default:'-'},
                    {query:'columns',desc:'表头',type:'array',options:'-',default:'-'},
                    {query:'auth-height',desc:'自适应高度',type:'number/boolearn',options:'false/number',default:'-95'},
                    {query:'max-height',desc:'最大高度（如果开启v-auth-height，自动计算）',type:'number',options:'-',default:'0'},
                    {query:'show-page',desc:'是否显示分页',type:'boolean',options:"true/false/auth（大于pageSize时，自动显示分页）",default:'auth'},
                    {query:'index',desc:'是否显示行号',type:'boolean',options:"true/false",default:'true'},
                    {query:'selection',desc:'是否显示选择框',type:'boolean',options:"true/false",default:'false'},
                    {query:'getList',desc:'分页请求',type:'function',options:"-",default:'-'},
                    {query:'row-key',desc:'行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',type:'Function(row)/String',options:"-",default:'-'},
                ],
                list1:[
                    {query:'handle-buttons',desc:`
                        触发按钮事件
                        返回参数是个对象,
                        {method,row,idx}
                        触发的方法,当前列的数据,当前行的索引
                    `,type:'function',options:``,default:'-'},
                    {query:'on-selection',desc:'触发勾选事件',type:'function',options:'-',default:'-'},
                ]
            }
        }
    }
</script>