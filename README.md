# 静态资源仓库

提供静态资源文件仓库，使用`jsdelivr`的 CDN 进行加速访问,国内访问地址用`https://cdn.jsdelivr.net`。根据不同目录进行路径拼接，比如：`https://cdn.jsdelivr.net/gh/AnyFork/resource/image/20250707210920186.png`.

## 图片目录

1、图片目录为`images`，采用`PicList`第三方客户端进行本地上传，客户端支持远程删除图片，图片类型转换，图片压缩。

2、可作为图床使用，访问地址：`https://cdn.jsdelivr.net/gh/AnyFork/resource/image/20250707210920186.png`,只需要修改对应的文件名称。

## JS 目录

1、收录一些不常见，`npm`库中没有的 js 文件。

2、手动上传。

## CSS 目录

1、收录第三方`css`文件。

2、存储`font`字体目录下外部引入`css`样式文件。

## Fonts 目录

1、收录常用中文字体源文件，可以直接完整引入，字体文件较大。

2、对收录的源文件进行中文分片处理，借助`font-slice`组件，将中文进行分片为很小的文件，然后根据页面实际字体，按需加载。

3、源文件在`fonts/original`目录下，对应的分片文件在`fonts/division`目录下。

4、根据源目录下面`.ttf`文件进行分片，分片后的小字体文件格式为`.woff2`

### 1. PingFangSC 多版本字体

提供了`PingFangSC` 字体的多版本下载，包括 eot、woff2、woff 和 ttf 格式。这些字体文件涵盖了六个不同的字重，适用于不同的设计需求。

#### 1. 字体版本及字重

- **苹方-简 常规体**: PingFangSC-Regular

- **苹方-简 细体**: PingFangSC-Light

- **苹方-简 中黑体**: PingFangSC-Medium

- **苹方-简 极细体**: PingFangSC-Ultralight

- **苹方-简 中粗体**: PingFangSC-Semibold

- **苹方-简 粗体**: PingFangSC-Bold

#### 2. 使用方法

1. 下载所需的字体文件。
2. 在您的项目中引用相应的字体文件。
3. 根据需要设置 `font-family`，例如：
   ```css
   body {
     font-family: PingFangSC-Regular, sans-serif;
   }
   ```

## 文件列表

- `PingFangSC-Regular.eot`
- `PingFangSC-Regular.woff2`
- `PingFangSC-Regular.woff`
- `PingFangSC-Regular.ttf`
- `PingFangSC-Light.eot`
- `PingFangSC-Light.woff2`
- `PingFangSC-Light.woff`
- `PingFangSC-Light.ttf`
- `PingFangSC-Medium.eot`
- `PingFangSC-Medium.woff2`
- `PingFangSC-Medium.woff`
- `PingFangSC-Medium.ttf`
- `PingFangSC-Ultralight.eot`
- `PingFangSC-Ultralight.woff2`
- `PingFangSC-Ultralight.woff`
- `PingFangSC-Ultralight.ttf`
- `PingFangSC-Semibold.eot`
- `PingFangSC-Semibold.woff2`
- `PingFangSC-Semibold.woff`
- `PingFangSC-Semibold.ttf`
- `PingFangSC-Bold.eot`
- `PingFangSC-Bold.woff2`
- `PingFangSC-Bold.woff`
- `PingFangSC-Bold.ttf`

## 注意事项

- 请确保在合法范围内使用这些字体文件。
- 如果您在项目中使用这些字体，请遵循相关的许可协议。

希望这些字体文件能够帮助您更好地完成设计工作！
