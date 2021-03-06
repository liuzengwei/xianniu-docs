# 脚本

::: tip 提示
node 环境下执行`node build/build-auth.js`
:::

#### 自动注册权限文件

在项目根目录创建 `build/build-auth.js`，然后复制以下代码。

``` javascript
/* 
    自动注册权限文件
    1.根据 /auth/permissionGroup/findMenuDetail 拿到所有权限列表(需要token，自行登录获取)
    2.然后根绝项目 setting.appNo 标识拿到对应的权限数组
    3.遍历数组，处理成想要的格式
    4.生成代码模板
    5.写入到项目目录 src/config/auth.js
*/

const config = {
    url: 'https://gatewaydev.xianniu.cn/auth/permissionGroup/findMenuDetail',
    token: '1390_6c949c4fc101cc6f70767d0f59654663'
}
const dir = './src/config'
const request = require('request')
const fs = require('fs')
const qs = require('qs')
const render = require('json-templater/string');
const path = require('path');
const endOfLine = require('os').EOL;
const settings = require('../src/settings.js')

var OUTPUT_PATH = path.join(__dirname, '../src/config/auth.js');

var AUTH_TEMPLATE = '\'auth{{menuId}}\':\'{{auth_code}}\', // {{docs}}';


var MAIN_TEMPLATE = `
/* appCode: {{auth_name}} */
const AUTH_CODE = {
    {{include}}
}
export default AUTH_CODE
`

// 遍历权限

var authArr = []
async function init() {
    const { code, data, msg } = await ajax({
        url: config.url,
        token: config.token,
        data: {
            appNo: settings.appNo
        }
    })
    if (code === 200) {
        // // console.log(data);
        let newArr = []
        if (data && data.length) {
            data.forEach(item => {
                if (item.appCode === settings.appNo) {
                    newArr = filterArr(item.bossApplicationMenuVOS)
                }
            })
        } else {
            newArr = []
        }
        createTemplate(newArr)
    } else {
        console.log(`****** error code: ${code},msg: ${msg},打开【${OUTPUT_PATH}】更换有效token ******`);
    }
}
// 封装一个请求
function ajax(obj = {}) {
    return new Promise((res, rej) => {
        request({
            url: obj.url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                'xnToken': obj.token
            },
            body: qs.stringify(obj.data || {})
        }, function (error, response, body) {
            if (error) {
                rej(error)
            } else {
                res(body)
            }
        })
    })
}
// 递归一下 获取appcode匹配的一维数组
function filterArr(arr1 = []) {
    var newArr = []
    const fn = function (arr) {
        arr.forEach(item => {
            newArr.push({ menuId: item.menuId, menuName: item.menuName, permissionCode: item.permissionCode, appCode: item.appCode })
            if (item.bossApplicationMenuVOS && item.bossApplicationMenuVOS.length) {
                fn(item.bossApplicationMenuVOS)
            }
        })
    }
    fn(arr1)
    return newArr
}

// 生成模板
function createTemplate(arr = []) {
    if (!arr.length) {
        console.log('**********************');
        console.log('******权限组为空******');
        console.log('**********************');
    }
    arr.forEach((item, index) => {
        const str = render(AUTH_TEMPLATE, {
            menuId:item.menuId,
            auth_code: item.permissionCode,
            docs: item.menuName
        })
        authArr.push(str)
    })
    var template = render(MAIN_TEMPLATE, {
        auth_name: settings.appNo,
        include: authArr.join(endOfLine)
    })
    // 写入的路径
    const isHas = fs.existsSync(dir)
    // 如果不存在 就先创建一个config文件夹
    if (!isHas) {
        fs.mkdirSync(dir)
    }
    fs.writeFileSync(OUTPUT_PATH, template);
    console.log(`[build auth] success!`, OUTPUT_PATH);
}
// 调用
init()
```

执行以下命令
``` javascript
node build/build-auth.js
```

以下为结果示例

``` javascript

/* appCode: XTD */
const AUTH_CODE = {
  'auth0': 'xxx', // 对应的权限描述
}
export default AUTH_CODE
```