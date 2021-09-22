# xn-upload
对上传[Element-Upload](https://element.eleme.cn/#/zh-CN/component/upload)二次封装，目前只支持部分特性，后续会按需支持。

``` html javascript
<template>
    <xn-upload
        :max-size="1024 * 5 * 1024"
        disabled
        multiple
        :limit="9"
        :accept="['jpg', 'png', 'word', 'xlsx', 'xls', 'pdf']"
        :file-list.sync="[]"
        tip="支持jpg,png,word,xlsx,xls,pdf"
    />
</template>
<script>
    export default {
        data(){
            return {
               
            }
        },
        methods:{
            
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
                    {query:'file-list',desc:'绑定的数据(.sync)',type:'array',options:'-',default:'-'},
                    {query:'disabled',desc:'是否禁用',type:'boolean',options:'true/false',default:'false'},
                    {query:'multiple',desc:'是否开始一次性上传多张',type:'boolean',options:'true/false',default:'true'},
                    {query:'max-size',desc:'上传文件体积',type:'number',options:'-',default:'1024 * 5 * 1024 (5M)'},
                    {query:'limit',desc:'允许上传最大个数',type:'number',options:'-',default:'1'},
                    {query:'tip',desc:'上传文件描述',type:'string',options:'-',default:'-'},
                    {query:'accept',desc:'允许上传的文件格式',type:'array',options:'-',default:'["jpg", "jpeg", "png", "pdf"]'},
                    {query:'compress',desc:'压缩(只支持图片压缩)，0~1：按百分比压缩，>1：按固定值压缩',type:'boolean,number',options:'0~1/>1',default:'false'}
                ],
                list1:[
                    {query:'on-success',desc:'上传成功触发的自定义事件',type:'array',options:'-',default:'-'},
                ]
            }
        }
    }
</script>