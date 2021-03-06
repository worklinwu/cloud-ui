<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCountUp 数字渐变

- [示例](#示例)
    - [基本用法](#基本用法)
    - [方法](#方法)
    - [渐变结束回调函数](#渐变结束回调函数)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

## 示例
### 基本用法

``` html
<u-countup :end="100"></u-countup>
```

#### 分组 (1,000 vs 1000)
``` html
<u-countup :end="1000" is-group></u-countup>
```

#### 前缀，后缀
``` html
<u-countup :end="100" prefix="$" suffix="美元"></u-countup>
```

#### 小数
``` html
<u-countup :end="100" :decimals="2"></u-countup>
```

#### 动画函数
``` html
<u-countup :end="100" is-easing></u-countup>
```

#### 渐变时间(时间单位是秒)
``` html
<u-countup :end="100" :duration="3"></u-countup>
```

#### 转换单位简化数据
``` html
<u-countup :end="4567890" simplify></u-countup>
```

### 方法
```vue
<template>
    <u-form>
    <u-form-item label="演示效果">
        <u-linear-layout>
        <u-countup ref="countup" :start="start" :end="end" :is-easing="isEasing" :duration="duration"></u-countup>
        <u-button style="vertical-align: bottom;" color="primary" @click="show">开启渐变</u-button>
        <u-button style="vertical-align: bottom;" @click="reset">重置</u-button>
         <u-button style="vertical-align: bottom;" @click="pause">{{ `${isPause?'恢复':'暂停'}` }}</u-button>
        </u-linear-layout>
    </u-form-item>
    <u-form-item label="结束值">
        <u-input v-model.number="end"></u-input>
    </u-form-item>
    <!-- 不支持动态改变属性 -->
    <!-- <u-form-item label="渐变时间">
        <u-input v-model.number="duration"></u-input>
    </u-form-item>
    <u-form-item label="启用动画函数">
        <u-capsules :value.sync="isEasing">
            <u-capsule :value="false">false</u-capsule>
            <u-capsule :value="true">true</u-capsule>
        </u-capsules>
    </u-form-item> -->
    </u-form>
</template>
<script>
export default{
    data() {
        return {
            start: 0,
            end: 100,
            duration: 2,
            isEasing: true,
            isPause: false,
        };
    },
    methods: {
        show() {
            // if (this.autoStart)
                this.$refs.countup.update(this.end)
            // else
            //   this.autoStart = true;
        },
        reset() {
            this.$refs.countup.reset();
        },
        pause() {
            this.isPause = !this.isPause;
            this.$refs.countup.pauseResume();
        }
    },
};
</script>
```

### 渐变结束回调函数
```vue
<template>
    <u-linear-layout>
        <u-countup :end="100" :auto-start="autoStart" :end-callback="end"></u-countup>
        <u-button style="vertical-align: bottom;" color="primary" @click="start">autoStart</u-button>
    </u-linear-layout>
</template>
<script>
export default{
    data() {
        return {
            autoStart: false,
        };
    },
    methods: {
        start() {
            this.autoStart = true;
        },
        end() {
            console.log('渐变结束');
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| start | number |  | `0` | 渐变开始数值 |
| end | number |  |  | 渐变结束数值 |
| duration | number |  | `2` | 渐变时间间隔，时间单位为秒 |
| isEasing | boolean |  | `false` | 是否使用 动画函数`easingFn`处理数据 |
| isGroup | boolean |  | `false` | 是否分组，默认分组分隔符`'separator'`属性值为`','` |
| separator | string |  | `','` | 分组分隔符 |
| decimals | number |  | `0` | 小数点后几位 |
| easingFn | Function |  | `'easeOutExpo'` | 自定义渐变动画，默认使用 `Robert Penner's easeOutExpo`函数 |
| simplify | boolean |  | `false` | 是否使用自定义单位简化数据 |
| unit | Array |  | `[3,K+, 6,M+, 9,G+]` | 配合`'simplify'`属性使用的自定义单位 |
| prefix | string |  | `''` | 前缀内容 |
| suffix | string |  | `''` | 后缀内容 |
| endCallback | Function |  |  | 渐变结束后的回调函数 |
| autoStart | boolean |  | `false` | 是否开启渐变 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @update

更新渐变结束

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | number | 最新结束值 |

#### @reset

重置

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | number | 初始值 |

#### @pauseResume

切换渐变

Methods

#### update(value)

更新渐变结束值

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| value | number |  | 最新结束值 |

#### reset()

重置

#### pauseResume()

切换渐变

