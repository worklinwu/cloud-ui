"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'},webpackJsonp([34],{522:function(t,s,a){var e="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function r(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},580:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{date:"2017-12-01 20:12:12"}},methods:{change:function(t){console.log(t)},select:function(t){console.log(t)}}},n={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-date-time-picker",{attrs:{date:t.date},on:{change:function(s){t.change(s.date)},select:function(s){t.select(s)}}})},staticRenderFns:[]},r={components:{C374a59:a(0)(e,n,!1,null,null,null).exports}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("日期时间选择 DateTimePicker")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("h4",[t._v("声明式")]),a("h3",[t._v("基本 有初始值")]),a("div",{staticClass:"u-example"},[a("u-date-time-picker",{attrs:{date:"2018-08-08",autofocus:""}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("autofocus")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("基本 无初始值")]),a("div",{staticClass:"u-example"},[a("u-date-time-picker")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-date-time-picker",{attrs:{date:"2018-08-08",disabled:"disabled"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("只读")]),a("div",{staticClass:"u-example"},[a("u-date-time-picker",{attrs:{date:"2018-08-08",readonly:"readonly"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("最大值 最小值")]),a("div",{staticClass:"u-example"},[a("u-date-time-picker",{attrs:{date:"2017-05-12 8:00:00","min-date":"2017-01-10 07:00:00","max-date":"2017-12-12 07:00:00"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-05-12 8:00:00"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("min-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-01-10 07:00:00"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("max-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-12-12 07:00:00"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("方法change")]),a("div",{staticClass:"u-example"},[a("C374a59")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@change")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"change($event.date)"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"select($event)"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'2017-12-01 20:12:12'")]),t._v(",\n\t\t};\n\t},\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        change(time) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(time);\n        },\n        select(date) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date);\n        }\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("DateTimePicker API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("date")]),a("td",[t._v("String, Number, Date")]),a("td"),a("td",[t._v("显示的日期值")])]),a("tr",[a("td",[t._v("minDate")]),a("td",[t._v("String, Number, Date")]),a("td"),a("td",[t._v("最小日期值")])]),a("tr",[a("td",[t._v("maxDate")]),a("td",[t._v("SString, Number, Date")]),a("td"),a("td",[t._v("最大日期值")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("请选择时间")])]),a("td",[t._v("默认提示语")])]),a("tr",[a("td",[t._v("autofocus")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否默认处于focus状态")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("yearDiff")]),a("td",[t._v("String, Number")]),a("td",[a("code",{pre:!0},[t._v("3")])]),a("td",[t._v("最小可选年份值为当前年减去此值")])]),a("tr",[a("td",[t._v("yearAdd")]),a("td",[t._v("String, Number")]),a("td",[a("code",{pre:!0},[t._v("1")])]),a("td",[t._v("最大可选年份值为当前年加上此值")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@select")]),a("p",[t._v("日期值发生变化触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.date")]),a("td",[t._v("NUmber")]),a("td",[t._v("选择项的值，默认返回时间戳")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("选择新时间触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.date")]),a("td",[t._v("NUmber")]),a("td",[t._v("选择项的值，默认返回时间戳")])])])])])},staticRenderFns:[]},v=a(0)(r,l,!1,null,null,null);s.default=v.exports}});