## 简介

一个简单的颜色处理库，支持处理 `'hex' | 'hexa' | 'hsl' | 'hsla' | 'rgb' | 'rgba' | 'hsv' | 'hsva'` 这些格式和一些常用颜色处理方法，如（生成连续色阶、调整亮度/饱和度、混合颜色等）。

## npm 安装

```
npm install @nie-ny/color
```

## 使用

```js
import { isHex } from '@nie-ny/color';
```

##

#### isHex 是否为 Hex 类型

```js
isHex("#fff"): true
isHex("#ffffff"): true
isHex("red"): false
isHex("#ffffff00"): false
isHex("rgb(255, 255, 255)"): false
```

#### isHexa 是否为 Hexa 类型

```js
isHexa("#fff0"): true
isHexa("#ffffff00"): true
isHexa("red"): false
isHexa("#ffffff"): false
isHexa("rgb(255, 255, 255)"): false
```

#### isRgb 是否为 Rgb 类型

```js
isRgb("rgb(255, 255, 255)"): true
isRgb("rgba(255, 255, 255, 0.5)"): false
isRgb("red"): false
isRgb("111"): false
isRgb("#fff"): false
```

#### isRgba 是否为 Rgba 类型

```js
isRgba("rgba(255, 255, 255, 0.5)"): true
isRgba("rgb(255, 255, 255)"): false
isRgba("red"): false
isRgba("111"): false
isRgba("#fff"): false
```

#### isHsl 是否为 Hsl 类型

```js
isHsl("hsl(120, 100%, 50%)"): true
isHsl("hsl(120 100% 50%)"): true
isHsl("hsl(520 100% 50%)"): false
isHsl("hsla(120, 100%, 50%, 0.5)"): false
isHsl("#fff"): false
```

#### isHsla 是否为 Hsla 类型

```js
isHsla("hsla(120, 100%, 50%, 0.5)"): true
isHsla("hsla(120 100% 50% / 0.5)"): true
isHsla("hsla(420 100% 50% / 0.5)"): false
isHsla("#fff"): false
```

#### isHsv 是否为 Hsv 类型

```js
isHsv("hsv(120, 100%, 50%)"): true
isHsv("hsv(120 100% 50%)"): true
isHsv("hsv(420 100% 50%)"): false
isHsv("#fff"): false
```

#### isHsva 是否为 Hsva 类型

```js
isHsva("hsva(120, 100%, 50%, 0.5)"): true
isHsva("hsva(120 100% 50% / 0.5)"): true
isHsva("hsva(420 100% 50% / 0.5)"): false
isHsva("#fff"): false
```

#### isColor 是否为插件支持颜色

```js
isColor("hsva(120 100% 50% / 0.5)"): true
isColor("hsv(100 100% 50% )"): true
isColor("red"): true
isColor("#fff"): true
isColor("hsv(420 100% 50% )"): false
isColor("ffhfjj"): false
```

#### isValidator 返回颜色类型/返回颜色关键字 hex 颜色

```js
isValidator("hsva(120 100% 50% / 0.5)"): hsva
isValidator("hsv(100 100% 50% )"): hsv
isValidator("#fff"): hex
isValidator("red"): #ff0000
isValidator('ffhfjj'): Uncaught Error: Color: 非插件支持类型 ffhfjj
```

#### isLight 判断颜色是否是亮色

```js
isLight("hsva(120 100% 50% / 0.5)"): false
isLight("hsv(120 100% 100% )"): true
isLight("red"): false
isLight("#fff"): true
```

#### isDark 判断颜色是否是暗色

```js
isDark("hsva(120 100% 50% / 0.5)"): true
isDark("hsv(120 100% 100% )"): false
isDark("red"): true
isDark("#fff"): false
```

##

#### getColorByKeyword 按关键字获取颜色

```js
getColorByKeyword("red"): #ff0000
getColorByKeyword("blue"): #0000ff
```

#### getRandomHex 随机生成 hex 格式的颜色

```js
getRandomHex(): #316770
getRandomHex(): #acffc3
getRandomHex(): #a6f39a
```

#### getRgbaVal 获取颜色的 Rgba 值

```js
getRgbaVal("red"): {red: 255, green: 0, blue: 0, alpha: 1, format: 'hex'}
getRgbaVal("#554411"): {red: 85, green: 68, blue: 17, alpha: 1, format: 'hex'}
getRgbaVal("#55441122"): {red: 85, green: 68, blue: 17, alpha: 0.1, format: 'hexa'}
geRgbaVal("hsl(50, 50%, 50%)"): {red: 191, green: 170, blue: 63, alpha: 1, format: 'hsl'}
```

#### getGeneratePalette 获取颜色，色阶

```js
getGeneratePalette("rgb(23, 131, 255)", "rgb(23, 199, 111)", 12, "hex"):
['#1783ff', '#1789f2', '#178fe5', '#1796d8', '#179ccb', '#17a2be', '#17a8b0', '#17aea3', '#17b496', '#17bb89', '#17c17c', '#17c76f']
```

![1.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c502b4126b864970b0d6fa71a400d351~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780384721&x-orig-sign=jsHVOth9XMROe46LdI9vQiuYmvw%3D)

```js
getGeneratePalette("rgb(23, 199, 111)", "rgb(35, 145, 255)", 8):
['rgb(23, 199, 111)', 'rgb(25, 191, 132)', 'rgb(26, 184, 152)', 'rgb(28, 176, 173)', 'rgb(30, 168, 193)', 'rgb(32, 160, 214)', 'rgb(33, 153, 234)', 'rgb(35, 145, 255)']
```

![2.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d37a01b005fd478195e155d7baaca603~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780385407&x-orig-sign=4Bh%2BOe6zYAu4C7abOIGXYHhVyVs%3D)

#### getLuminance 获取相对亮度（WCAG 2.0 标准）

```js
getLuminance("rgb(23, 199, 111)"): 0.4217670338310743
getLuminance("red"): 0.2126
getLuminance("#778899"): 0.23830165007286933
```

#### getContrast 计算两个颜色的对比度（WCAG 2.0）

```js
getContrast("rgb(23, 199, 111)", "white"): 2.2256748028222204
getContrast("red", "white"): 3.9984767707539985
getContrast("#778899", "white"): 3.6420186972034623
```

#### getHue 获取色相值

```js
getHue("rgb(23, 199, 111)"): 150
getHue("red"): 0
getHue("#778899"): 210
```

#### getSaturation 获取饱和度值

```js
getSaturation("rgb(23, 199, 111)"): 79
getSaturation("red"): 100
getSaturation("#778899"): 14
```

#### getLightness 获取亮度值

```js
getLightness("rgb(23, 199, 111)"): 44
getLightness("red"): 50
getLightness("#778899"): 53
```

#### getAnalogous 获取类似色（左右 30 度）

```js
getAnalogous("rgb(23, 199, 111)"): ['#18c918', '#17c76f', '#18c9c9']
getAnalogous("#778899", 90): ['#769876', '#778899', '#987698']
```

![3.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/678588428f98427b8c7983c8b1401a3b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780386882&x-orig-sign=oZ%2Fp7144JDWZExtSyTgQWoqcxhQ%3D)

![4.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9bdc198620c3435281b8136719828ea8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780386888&x-orig-sign=NeR0fkw8FZ5ndxAz3XAeiRLfuWA%3D)

#### getMonochromatic 获取单色调色板

```js
getMonochromatic("rgb(23, 199, 111)"): ['#000000', '#0d7240', '#1be480', '#8df2bf', '#ffffff']
getMonochromatic("#778899", 6): ['#000000', '#2c333a', '#586674', '#8b99a7', '#c5ccd3', '#ffffff']
```

#### getTetradic 获取分裂互补色

```js
getTetradic("rgb(23, 199, 111)"): ['#17c76f', '#1818c9', '#c91870', '#c9c918']
getTetradic("#778899", 8): ['#778899', '#987698', '#988776', '#769876']
```

![5.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ab1b25806c984f5bb9b3d96c7690e491~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780387470&x-orig-sign=Y9bmiEOWRHvOc%2BnVdBfBtqgmWhQ%3D)

##

#### toRgb 将颜色转换为 rgb|rgba 格式

```js
toRgb("red",true,0.5)): rgba(255, 0, 0, 0.5)
toRgb("#778899": rgb(119, 136, 153)
toRgb("hsl(120 100% 50%)"): rgb(0, 255, 0)
```

#### toHsl 将颜色转换为 hsl|hsla 格式

```js
toHsl("red",true,0.5)): hsla(0, 100%, 50%, 0.5)
toHsl("#778899": hsl(210, 14%, 53%)
toHsl("hsv(120 100% 50%)"): hsl(120, 100%, 25%)
```

#### toHsv 将颜色转换为 hsv/hsva 格式

```js
toHsv("red",true,0.5)): hsva(0, 100%, 100%, 0.5)
toHsv("#778899": hsv(210, 22%, 60%)
toHsv("hsl(120 100% 50%)"): hsv(120, 100%, 100%)
```

#### toHex 将颜色转换为 hex|hexa 格式

```js
toHex("red", true, 0.5): #ff00007f
toHex("rgb(23, 199, 111)"): #17c76f
toHex("hsl(120 100% 50%)"): #00ff00
```

#### toDarken 颜色加深

```js
toDarken("red", 50): #800000
toDarken("rgb(23, 199, 111)", 50): rgb(0, 72, 0)
toDarken("hsl(120 100% 50%)", 40): hsl(120, 100%, 30%)
```

![6.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/da6d6e0e1ac84a488b7d10bdf1b8bc9e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780388462&x-orig-sign=MYHgI4keRo6o%2FMyNl9f7Pt%2BsEO8%3D)

#### toLighten 颜色变亮

```js
toLighten("red", 50): #ff7f7f
toLighten("rgb(23, 199, 111)", 50): rgb(151, 255, 239)
toLighten("hsl(120 100% 50%)", 40): hsl(120, 100%, 70%)
```

![7.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6d4441d78f72469a9a0147a6cec9481d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780388578&x-orig-sign=DV6LQ2Q2Hk08jvfIcnyPpwNNSZw%3D)

#### toRotateHue 旋转色相

```js
toRotateHue("red", 180): #00ffff
toRotateHue("rgb(23, 199, 111)", 50): rgb(24, 142, 201)
toRotateHue("hsl(120 100% 50%)", 40): hsl(160, 100%, 50%)
```

![8.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/487d1840f0eb48b2a20abc0681d21587~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780388837&x-orig-sign=5O0rWCRkCCFyPt7dR63VOkQsT0E%3D)

#### toInvert 颜色反转

```js
toInvert("red"): #00ffff
toInvert("rgb(23, 199, 111)"): rgb(232, 56, 144)
toInvert("hsl(120 100% 50%)"): hsl(300, 100%, 50%)
```

#### toGrayscale 颜色灰度化

```js
toGrayscale("red"): #4c4c4c
toGrayscale("rgb(23, 199, 111)"): rgb(136, 136, 136)
toGrayscale("hsl(120 100% 50%)"): hsl(0, 0%, 59%)
```

#### toComplement 获取互补色

```js
toComplement("red"): #00ffff
toComplement("rgb(23, 199, 111)"): rgb(201, 24, 112)
toComplement("hsl(120 100% 50%)"): hsl(300, 100%, 50%)
```

#### mix 混合两个颜色

```js
mix("red", "blue"): #3300cc
mix("rgb(23, 199, 111)", "rgb(0, 0, 255)"): rgb(12, 100, 183)
mix("hsl(120 100% 50%)", "hsl(240 100% 50%)"): hsl(180, 100%, 25%)
```

![9.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3fd436f272d44a408fe5fd018b5e3e47~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YKj5Lqb5bm05Li2bnk=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQ4NTYzMTYwMjU5OTQ5NSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1780389245&x-orig-sign=XN4CADB1Oojdv7GSbDhoGqiSVrk%3D)
