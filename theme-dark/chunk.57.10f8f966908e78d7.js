"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'},webpackJsonp([57],{522:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function v(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function r(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=v(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},556:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("数字输入 NumberInput")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-number-input"),a("u-number-input",{attrs:{value:6}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("最大值和最小值")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-number-input",{attrs:{value:6,min:4,max:12}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("精度与间隔")]),a("p",[s._v("精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为"),a("code",{pre:!0},[s._v("1")]),s._v("，即保留到整数。")]),a("p",[s._v("间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-number-input",{attrs:{value:6,precision:.1,step:.5}}),a("u-number-input",{attrs:{value:5,precision:5,step:10}}),a("u-number-input",{attrs:{value:6,step:10}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":precision")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.5"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":precision")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("错误修复时机")]),a("p",[s._v("用"),a("code",{pre:!0},[s._v("fixOn")]),s._v("属性可以设置错误在失焦时修复（默认）还是在输入时修复。")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-number-input",{attrs:{value:20,precision:10,step:10}}),a("u-number-input",{attrs:{value:20,precision:10,step:10,"fix-on":"input"}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":precision")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":precision")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fix-on")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"input"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("格式化")]),a("p",[s._v("通常可以用以下字符组成一个格式化字符串：")]),a("ul",[a("li",[a("code",{pre:!0},[s._v("0")]),s._v("表示数字占位符。如果整数部分长度小于占位符的数量，则用"),a("code",{pre:!0},[s._v("0")]),s._v("补足。如果小数部分长度大于占位符数量，则会四舍五入。")]),a("li",[a("code",{pre:!0},[s._v("#")]),s._v("表示数字占位符。只显有意义的零而不显示无意义的零。")]),a("li",[a("code",{pre:!0},[s._v(".")]),s._v("表示小数点。")]),a("li",[a("code",{pre:!0},[s._v(",")]),s._v("表示千分位。")])]),a("p",[s._v("也可以传入一个包含"),a("code",{pre:!0},[s._v("get")]),s._v("和"),a("code",{pre:!0},[s._v("set")]),s._v("方法的格式化对象。")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-number-input",{attrs:{value:20,formatter:"0000"}}),a("u-number-input",{attrs:{value:1234,precision:.01,step:.1,formatter:"$ #,##0.00"}}),a("u-number-input",{attrs:{value:20,precision:.5,step:.5,formatter:"0.0%"}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0000"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1234"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":precision")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$ #,##0.00"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":precision")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.5"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.5"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.0%"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("只读和禁用")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-number-input",{attrs:{value:6,readonly:""}}),a("u-number-input",{attrs:{value:6,disabled:""}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value.sync, v-model")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("0")])]),a("td",[s._v("输入框的值")])]),a("tr",[a("td",[s._v("min")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("-Infinity")])]),a("td",[s._v("最小值")])]),a("tr",[a("td",[s._v("max")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("+Infinity")])]),a("td",[s._v("最大值")])]),a("tr",[a("td",[s._v("step")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("1")])]),a("td",[s._v("间隔，表示点击按钮或按上下键所增加或减少的量")])]),a("tr",[a("td",[s._v("precision")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("1")])]),a("td",[s._v("精度，表示数字要保留的最小单位，整数、小数均可")])]),a("tr",[a("td",[s._v("formatter")]),a("td",[s._v("String, Object")]),a("td"),a("td",[s._v("格式化字符串，具体参见示例。也可以传入一个包含"),a("code",{pre:!0},[s._v("get")]),s._v("和"),a("code",{pre:!0},[s._v("set")]),s._v("方法的格式化对象。")])]),a("tr",[a("td",[s._v("fix-on")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'blur'")])]),a("td",[s._v("错误修复时机。可选值："),a("code",{pre:!0},[s._v("'input'")]),s._v("表示在输入时修复，"),a("code",{pre:!0},[s._v("'blur'")]),s._v("表示在失焦时修复")])]),a("tr",[a("td",[s._v("placeholder")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("原生属性")])]),a("tr",[a("td",[s._v("autofocus")]),a("td",[s._v("Boolean")]),a("td"),a("td",[s._v("原生属性")])]),a("tr",[a("td",[s._v("hide-buttons")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否隐藏按钮")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@input")]),a("p",[s._v("输入时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event")]),a("td",[s._v("String")]),a("td",[s._v("输入框的值")])])])]),a("h4",[s._v("@change")]),a("p",[s._v("值变化时触发（与原生事件不同）")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("Number")]),a("td",[s._v("改变后的值")])]),a("tr",[a("td",[s._v("$event.oldValue")]),a("td",[s._v("Number")]),a("td",[s._v("旧的值")])]),a("tr",[a("td",[s._v("$event.formattedValue")]),a("td",[s._v("String")]),a("td",[s._v("格式化后的值")])])])]),a("h4",[s._v("@focus")]),a("p",[s._v("获得焦点时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event")]),a("td",[s._v("String")]),a("td",[s._v("原生事件对象")])])])]),a("h4",[s._v("@blur")]),a("p",[s._v("失去焦点时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event")]),a("td",[s._v("String")]),a("td",[s._v("原生事件对象")])])])])])},staticRenderFns:[]},v=a(0)(null,n,!1,null,null,null);t.default=v.exports}});