# 一些常用的工具or方法


日期处理[(dayjs)](https://www.npmjs.com/package/dayjs)

数据缓存[(good-storage)](https://www.npmjs.com/package/good-storage)

工具库[(lodash)](https://www.lodashjs.com/)

#### 一些正则验证 

使用方法 `this.$reg`

``` js
checkPhone: /^1(3|4|5|6|7|8|9)\d{9}$/, // 校验手机号
checkPwd: /^[0-9A-Za-z]{8,20}$/, // 8-20位的字母和数字
checkNumber: /^[+-]?(0|([1-9]\d*))(?:\.\d{1,2})?$/g // 校验数字类型
```

#### 对金额的格式化

使用方法 `this.$format`

``` js
this.$format.toText('100') // ￥100.00
this.$format.toCN('100') // 壹佰元整
```

##### toText 的参数
<api :list="list"></api>

<script>
    export default {
        data(){
            return {
                list:[
                    {query:'number',desc:'要格式化的数字',type:'number',options:'-',default:'-'},
                    {query:'decimals',desc:'保留几位小数',type:'number',options:'-',default:'2'},
                    {query:'dec_point',desc:'小数点符号',type:'string',options:'-',default:'.'},
                    {query:'thousands_sep',desc:'千分符符号',type:'string',options:'-',default:','},
                    {query:'symbol',desc:'金额符号',type:'string',options:'-',default:'￥'},
                ],
            }
        }
    }
</script>