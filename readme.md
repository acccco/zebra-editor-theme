# 斑码编辑器主题

斑码编辑器主题，使用 [`stylus`](https://github.com/stylus/stylus/) 编写，支持直接写入 `Css`，不需要带任何命名空间。

## 主题模板

```stylus
// 主题名
// 作者

// 主题的样式

p {
  color: red;
}

// ...
```

## 测试 & 提交

可以尝试先在[斑码编辑器](https://zebrastudio.tech)的自定义主题中，尝试主题的呈现效果，然后通过 `PR` 提交。

## 发布

`PR` 后，管理者也就是我 ~ 会检查代码，加些空格，整理样式等，保证代码的整洁性。

检查结束后合并到 `deploy` 分支，等待 `github actions` 完成，主题就发布好啦！也就是收到 `merge` 通知后延迟大概 `5` 分钟就能在[斑码编辑器](https://zebrastudio.tech)上查看主题和使用主题了。

## 其他编辑器

开源的精神就是共享，其他编辑器可直接使用[斑码编辑器](https://zebrastudio.tech)的主题，通过下述方式。

### 直接使用斑码的资源

可通过以下几步获取资源文件：

1. 通过 https://zebrastudio.tech/theme/article/index.json 获取所有主题的配置信息；
2. 配置信息格式为：`[ 文件名, 作者, 主题名 ]`；
3. 通过文件名获取主题样式：https://zebrastudio.tech/theme/article/${文件名}.css；

**注：** 

1. [斑码编辑器](https://zebrastudio.tech)中不管主题如何，默认主题( `default` )始终会被引入，为了保持一致性，请始终引入默认主题；
2. 想获取带命名空间的主题，使用以下链接： https://zebrastudio.tech/theme/article/${文件名}.scoped.css 。通过这种形式引入的主题，样式会带上 `article` 的命名空间。

### fork 本项目

`fork` 项目后，就拥有所有的主题样式了，想怎么整都可以！

## 最后

开源是不断进步的动力，欢迎大家 `PR` 自己喜欢的主题，但开源并不是随意拷贝，如非原创，请注明出处！

如果，你有想法，但苦于代码上的问题，联系我，我来帮你实现。

最后，感谢那些在开源路上，无偿贡献的你们 ~