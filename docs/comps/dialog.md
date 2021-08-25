# xn-dialog
对弹窗[Element-Dialog](https://element.eleme.cn/#/zh-CN/component/dialog)二次封装，目前只支持部分特性，后续会按需支持。

``` html vue
<template>
    <xn-dialog title="标题" :show="isShow" @on-confirm="onConfirm" :before-close="()=>{isShow = false}">
      ...
    </xn-dialog>
</template>
<script>
    export default {
        data(){
            return {
                isShow: false
            }
        },
        methods:{
            // 点击确认
            onConfirm(){}
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
                    {query:'show',desc:'是否显示弹窗',type:'boolean',options:'true/false',default:'false'},
                    {query:'title',desc:'标题',type:'string',options:'-',default:'-'},
                    {query:'before-close',desc:'关闭前的回调，会暂停 Dialog 的关闭',type:'function',options:'function(done)，done 用于关闭 Dialog',default:'-'},
                    {query:'top',desc:'距离顶部的距离',type:'string',options:'-',default:'15vh'},
                    {query:'append-to-body',desc:'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',type:'boolean',options:'true/false',default:'false'},
                    {query:'show-confirm',desc:'是否显示确认按钮',type:'boolean',options:'true/false',default:'true'},
                    {query:'show-confirm',desc:'是否显示确认按钮',type:'boolean',options:'true/false',default:'true'},
                    {query:'confirm-text',desc:'确认按钮的文案',type:'string',options:'-',default:'确认'},
                    {query:'drag',desc:'是否开启拖拽',type:'boolean',options:'true/false',default:'false'},
                    {query:'size',desc:'窗口的尺寸',type:'string',options:'内置了4个尺寸，满足大部分需求，mini/small/medium/large 对应 320/560/720/960',default:'small'},
                    {query:'width',desc:'窗口的自定义尺寸',type:'string',options:'优先级高于size',default:'-'},
                ],
                list1:[
                    {query:'on-configm',desc:'点击确认的回调',type:'function',options:'-',default:'-'},
                    {query:'on-open',desc:'打开窗口的回调',type:'function',options:'-',default:'-'},
                    {query:'on-opened',desc:'窗口渲染完成的回调',type:'function',options:'-',default:'-'},
                ]
            }
        }
    }
</script>