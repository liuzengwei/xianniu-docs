# xn-drawer
对弹窗[Element-Drawer](https://element.eleme.cn/#/zh-CN/component/drawer)二次封装，目前只支持部分特性，后续会按需支持。

``` html vue
<template>
    <xn-drawer title="" :show.sync="show" :before-close="onClose" @on-open="onOpen" @on-opened="onOpened" @on-confirm="onSubmit">
      ...
    </xn-drawer>
</template>
<script>
    export default {
        data(){
            return {
                isShow: false
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
                    {query:'show',desc:'是否显示弹窗',type:'boolean',options:'true/false',default:'false'},
                    {query:'title',desc:'标题',type:'string',options:'-',default:'-'},
                    {query:'before-close',desc:'关闭前的回调，会暂停 Dialog 的关闭',type:'function',options:'function(done)，done 用于关闭 Dialog',default:'-'},
                    {query:'size',desc:'窗口的尺寸',type:'string',options:'-',default:'70%'},
                    {query:'align',desc:'底部按钮位置',type:'string',options:'left/center/right',default:'left'},
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