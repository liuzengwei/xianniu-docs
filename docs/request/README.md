# 公共请求

基于业务封装的公共请求[(xianniu-request)](https://www.npmjs.com/package/xianniu-request)

安装

``` js
> npm install xianniu-request -S
```
初始化

``` js
import Request from 'xianniu-request'
import domain from '@/env-config' // 导入环境变量
const http = new Request({
  token: 'xxx',
  gateway: [
    { name: 'baseUrl', url: domain.apiUrl },
    { name: 'AUTH', url: 'xxxxxx' }, // 根据不同的网关，设置不同的地址
  ]
})
http.$on('expire', function(res) {
  // 监听过期
  console.log(res)
})
export default http
```

#### 基础配置项 config
---

<api :list="listConfig"></api>

<script>
   export default {
        data(){
            return {
                listConfig:[
                    {query:'token',desc:'请求token',type:'string',options:'-',default:'-'},
                    {query:'tokenKey',desc:'请求头token字段',type:'string',options:'-',default:'xnToken'},
                    {query:'gateway',desc:'请求网关',type:'array',options:'[{ name: "baseUrl", url: domain.apiUrl },xxx]',default:'-'},
                    {query:'statusCode',desc:'自定义状态码',type:'object',options:'{xxx:250}',default:'-'},
                    {query:'loading',desc:'自定义loading',type:'funciton',options:'-',default:'element-loading'},
                ]
            }
        }
    }
</script>