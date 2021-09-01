# xn-description
详情页面展示详情描述时候的组件！

``` html javascript
<template>
   <xn-description margin="20px" label-width="90px" title="采购信息">
      <template #more>
        <el-button type="primary" size="mini">更多</el-button>
      </template>
      <xn-description-item label="字段1">
        <el-button type="primary" size="mini">按钮</el-button>
      </xn-description-item>
      <xn-description-item label="字段2">xxx</xn-description-item>
      <xn-description-item label="字段3">xxxx</xn-description-item>
    </xn-description>
</template>
```



#### xn-description 属性
---
<api :list="list"></api>

#### xn-description 插槽
---
<api :list="list1"></api>

#### xn-description-item 属性
---
<api :list="list2"></api>

<script>
   export default {
        data(){
            return {
                list:[
                    {query:'title',desc:'标题',type:'string',options:'-',default:'-'},
                    {query:'column',desc:'显示几列',type:'number',options:'-',default:'3'},
                    {query:'label-width',desc:'标签文本宽度',type:'string',options:'-',default:'80px'},
                    {query:'margin',desc:'组件的外边距',type:'string',options:'-',default:'0'},
                ],
                list1:[
                    {query:'more',desc:'右侧工具栏',type:'html',options:'-',default:'-'},
                ],
                list2:[
                    {query:'label',desc:'标签',type:'string',options:'-',default:'-'},
                    {query:'span',desc:'每一栏占用的宽度（例如：父级有3列，span最大可设置3）',type:'number',options:'-',default:'1'},
                ],
            }
        }
    }
</script>