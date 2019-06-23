const pkg = require('./package.json');

module.exports = {
    version: '>=0.8.5',
    type: 'library',
    name: 'cloud-ui',
    CamelName: 'CloudUI',
    uglifyJS: true,
    extractCSS: true,
    sourceMap: true,
    webpackDevServer: {
        historyApiFallback: {
            index: '/cloud-ui/',
        },
    },
    docs: {
        title: 'Cloud UI 组件库',
        logo: '组件库',
        mode: 'history',
        base: '/cloud-ui/',
        github: 'https://github.com/vusion/cloud-ui#next',
        package: pkg,
        navbar: [
            { text: '组件', to: '/components' },
        ],
        components: [
            { group: 'Guide', name: 'quickstart', alias: '快速开始', path: './docs/views/guide/quickstart.md' },
            { group: 'Guide', name: 'pattern', alias: '设计模式', path: 'proto-ui.vusion/docs/views/guide/pattern.md' },
            { group: 'Guide', name: 'changelog', alias: '更新日志', href: 'https://github.com/vusion/cloud-ui/releases', target: '_blank' },
            { group: 'Guide', name: 'scheme', alias: '视觉方案', path: 'library/base/scheme.md' },
            { group: 'Basic', name: 'typography', alias: '排版', path: 'proto-ui.vusion/src/base/typography.md' },
            { group: 'Basic', name: 'u-text', alias: '文本' },
            { group: 'Basic', name: 'u-link', alias: '链接' },
            { group: 'Basic', name: 'u-button', alias: '按钮' },
            { group: 'Basic', name: 'u-badge', alias: '徽章' },
            { group: 'Basic', name: 'u-label', alias: '标签' },
            { group: 'Basic', name: 'u-actions', alias: '操作项' },
            // { group: 'Basic', name: 'i-icon', alias: '图标' },
            { group: 'Basic', name: 'u-status-icon', alias: '状态图标' },
            { group: 'Basic', name: 'u-logo', alias: '标识' },
            { group: 'Layout', name: 'u-linear-layout', alias: '线性布局' },
            { group: 'Layout', name: 'u-grid-layout', alias: '栅格布局' },
            { group: 'Layout', name: 'u-list', alias: '列表' },
            { group: 'Layout', name: 'u-desc-list', alias: '描述列表' },
            { group: 'Layout', name: 'u-info-list', alias: '信息列表' },
            { group: 'Layout', name: 'u-table', alias: '表格' },
            { group: 'Layout', name: 'u-article', alias: '文章' },
            { group: 'Layout', name: 'u-collapse', alias: '折叠面板' },
            { group: 'Navigation', name: 'u-navbar', alias: '导航栏' },
            { group: 'Navigation', name: 'u-sidebar', alias: '侧边栏' },
            { group: 'Navigation', name: 'u-menu', alias: '菜单' },
            { group: 'Navigation', name: 'u-subnav', alias: '子导航' },
            { group: 'Navigation', name: 'u-tabs', alias: '标签页' },
            { group: 'Navigation', name: 'u-subtabs', alias: '子标签页' },
            { group: 'Navigation', name: 'u-steps', alias: '步骤条' },
            { group: 'Navigation', name: 'u-selectable-steps', alias: '可选步骤条' },
            { group: 'Navigation', name: 'u-crumb', alias: '面包屑' },
            { group: 'Navigation', name: 'u-pagination', alias: '翻页器' },
            { group: 'Navigation', name: 'u-combo-pagination', alias: '复合翻页器' },
            { group: 'Form', name: 'u-form', alias: '表单' },
            { group: 'Form', name: 'u-input', alias: '单行输入' },
            { group: 'Form', name: 'u-number-input', alias: '数字输入' },
            { group: 'Form', name: 'u-textarea', alias: '多行输入' },
            { group: 'Form', name: 'u-radios', alias: '单选组' },
            { group: 'Form', name: 'u-checkboxes', alias: '多选组' },
            { group: 'Form', name: 'u-switch', alias: '开关' },
            { group: 'Form', name: 'u-select', alias: '选择框' },
            { group: 'Form', name: 'u-cascade-select', alias: '级联选择' },
            { group: 'Form', name: 'u-region-select', alias: '地区选择' },
            { group: 'Form', name: 'u-slider', alias: '滑块' },
            { group: 'Form', name: 'u-combo-slider', alias: '复合滑块' },
            { group: 'Form', name: 'u-uploader', alias: '文件上传' },
            { group: 'Data', name: 'u-list-view', alias: '列表选择' },
            { group: 'Data', name: 'u-tree-view', alias: '树型选择' },
            { group: 'Data', name: 'u-table-view', alias: '表格视图' },
            { group: 'Data', name: 'u-old-table-view', alias: '表格视图', deprecated: true },
            { group: 'Data', name: 'u-resize-table', alias: '可调列宽表格', deprecated: true },
            { group: 'Data', name: 'u-capsules', alias: '胶囊' },
            { group: 'Data', name: 'u-cascade-capsules', alias: '级联胶囊' },
            { group: 'Data', name: 'u-pills', alias: '药丸' },
            { group: 'Data', name: 'u-tablets', alias: '药片' },
            { group: 'Data', name: 'u-countup', alias: '数字渐变' },
            { group: 'Data', name: 'u-transfer', alias: '穿梭框' },
            { group: 'DateTime', name: 'u-calendar', alias: '日历' },
            { group: 'DateTime', name: 'u-date-picker', alias: '日期选择' },
            { group: 'DateTime', name: 'u-time-picker', alias: '时间选择' },
            { group: 'DateTime', name: 'u-date-time-picker', alias: '日期时间' },
            { group: 'Popper', name: 'm-popper', alias: '弹出层' },
            { group: 'Popper', name: 'u-popup', alias: '弹出框' },
            { group: 'Popper', name: 'u-tooltip', alias: '工具提示' },
            { group: 'Feedback', name: 'u-spinner', alias: '加载图标' },
            { group: 'Feedback', name: 'u-loading', alias: '加载中' },
            { group: 'Feedback', name: 'u-toast', alias: '吐司提示' },
            { group: 'Feedback', name: 'u-modal', alias: '弹窗' },
            { group: 'Feedback', name: 'u-drawer', alias: '抽屉' },
            { group: 'Feedback', name: 'u-lightbox', alias: '灯箱' },
            { group: 'Effects', name: 'u-carousel', alias: '走马灯' },
            { group: 'Effects', name: 'e-ripple', alias: '波纹' },
            { group: 'Effects', name: 'e-watermark', alias: '水印' },
            { group: 'Progress & Charts', name: 'u-linear-progress', alias: '线型进度条' },
            { group: 'Progress & Charts', name: 'u-circular-progress', alias: '圆型进度条' },
            { group: 'Progress & Charts', name: 'u-chart', alias: '图表' },
            { group: 'Progress & Charts', name: 'u-bar-chart', alias: '柱状图' },
            { group: 'Progress & Charts', name: 'u-xbar-chart', alias: '水平柱状图' },
            { group: 'Progress & Charts', name: 'u-line-chart', alias: '线状图' },
            { group: 'Progress & Charts', name: 'u-pie-chart', alias: '饼状图' },
            { group: 'Mixins & Functional', name: 'm-emitter', alias: '发送器' },
            { group: 'Mixins & Functional', name: 'm-pub-sub', alias: '发布订阅模式' },
            { group: 'Mixins & Functional', name: 'm-parent', alias: '父子模式' },
            { group: 'Mixins & Functional', name: 'm-group', alias: '分组模式' },
            { group: 'Mixins & Functional', name: 'm-root', alias: '根节点模式' },
            { group: 'Mixins & Functional', name: 'm-singlex', alias: '单选模式' },
            { group: 'Mixins & Functional', name: 'm-multiplex', alias: '多选模式' },
            { group: 'Mixins & Functional', name: 'm-complex', alias: '复合模式' },
            { group: 'Mixins & Functional', name: 'f-collapse-transition', alias: '折叠过渡' },
            { group: 'Mixins & Functional', name: 'f-draggable', alias: '拖拽' },
            { group: 'Mixins & Functional', name: 'f-droppable', alias: '拖放' },
            { group: 'Mixins & Functional', name: 'f-dragger', alias: '拖拽器' },
            { group: 'Mixins & Functional', name: 'f-render', alias: '渲染器' },
            { group: 'Mixins & Functional', name: 'f-forbidden', alias: '禁用' },
        ],
        blocks: [],
        directives: [
            { group: 'Directive', name: 'v-repeat-click' },
            { group: 'Directive', name: 'v-click-outside' },
            { group: 'Directive', name: 'v-ellipsis-title' },
            { group: 'Directive', name: 'v-focus' },
        ],
        filters: [],
        // utils: [
        //     { group: 'Utils', name: 'DataSource', alias: '数据源' },
        //     { group: 'Utils', name: 'Formatters', alias: '格式器' },
        //     { group: 'Utils', name: 'dom', alias: 'DOM 相关' },
        //     { group: 'Utils', name: 'edit', alias: '编辑相关' },
        // ],
    },
};