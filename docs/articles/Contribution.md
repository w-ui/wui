# wui贡献指南


### wui项目目录介绍：

+[build]     //构建脚本
+[config]    //配置文件
-[dev]       //官网文档开发目录
--+[page]                //官网页面
--+[static]              //静态资源
---App.vue               //跟页面
---guide.config.json     //指南文档路由配置
---main.js               //启动文件
---nav.config.json       //组件文档路由配置
---routers.js            //官网路由
---template.html         //html模板
+[dist]          //编译后产物
-[docs]          //官网文档md文档目录
--+[articles]    //指南md文档
--+[components]  //组件md文档
+[examples]      //组件示例代码
+[lib]           //w-ui发布后的目录
+[node_modules]
+[packages]      //组件源代码存放目录
+[src]           //公共源代码存放目录
.babelrc         //babel配置文件

## 组件贡献指南

+ `dev/nav.config.json`中找到`通用`的group节点，添加组件信息描述
例如：新增组件Abc

```javascript
{
    "groupName": "通用",
    "group": [
        ...
      {
        "path": "/doc/Abc",       
        "title": "Abc XXX组件",
        "name": "Abc",
        "component": "Abc"
      }
       ...
    ]
  },
```

+ 在 `docs/components` 下添加 `Abc.md`, 具体格式可参照其他组件

+ 在 `examples` 下添加 `Abc.vue`, 组件的使用Demo

+ 运行 npm run dev, 可启动编辑调试

+ 运行 npm run doc, 可编译成静态文件，然后push到 w-ui.github.io

+ @lin-xi 会定期编译发布


## 指南文档贡献指南

+ `dev/guide.config.json` 添加组件信息描述, 可自定义新的group
例如：新增文章 Xyz

```javascript
{
    "groupName": "加入我们",
    "group": [
        ...
      {
        "path": "/guide/Xyz",
        "title": "增加文章Xyz",
        "name": "Xyz"
      }
      ...
    ]
}
```

+ 在 `docs/articles` 下添加 `Xyz.md`, 具体格式可参照其他文章

+ 运行 npm run dev, 可启动编辑调试

+ 运行 npm run doc, 可编译成静态文件，然后push到 w-ui.github.io