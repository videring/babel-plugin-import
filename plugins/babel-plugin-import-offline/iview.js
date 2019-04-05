// iview基础模块
const components = [
    'Affix',
    'Alert',
    'AutoComplete',
    'Avatar',
    'BackTop',
    'Badge',
    'Breadcrumb',
    'BreadcrumbItem',
    'Button',
    'ButtonGroup',
    'Card',
    'Carousel',
    'CarouselItem',
    'Cascader',
    'Checkbox',
    'CheckboxGroup',
    'Col',
    'Collapse',
    'ColorPicker',
    'Content',
    'DatePicker',
    'Dropdown',
    'DropdownItem',
    'DropdownMenu',
    'Footer',
    'Form',
    'FormItem',
    'Header',
    'Icon',
    'Input',
    'InputNumber',
    'Scroll',
    'Sider',
    'Submenu',
    'Layout',
    'LoadingBar',
    'Menu',
    'MenuGroup',
    'MenuItem',
    'Message',
    'Modal',
    'Notice',
    'Option',
    'OptionGroup',
    'Page',
    'Panel',
    'Poptip',
    'Progress',
    'Radio',
    'RadioGroup',
    'Rate',
    'Row',
    'Select',
    'Slider',
    'Spin',
    'Step',
    'Steps',
    'Table',
    'Tabs',
    'TabPane',
    'Tag',
    'Timeline',
    'TimelineItem',
    'TimePicker',
    'Tooltip',
    'Transfer',
    'Tree',
    'Upload'
]

const iviewModule = {}

for(let i = 0; i < components.length; i++) {
    iviewModule[components[i]] = [components[i]]
}

// 不能和html标签重复的组件，添加别名(除了Switch、Circle在使用中必须是iSwitch、iCircle',其他都可以不加"i")
let alias = {
    Button: 'iButton',
    Circle: 'iCircle',
    Col: 'iCol',
    Content: 'iContent',
    Form: 'iForm',
    Footer: 'iFooter',
    Header: 'iHeader',
    Input: 'iInput',
    Menu: 'iMenu',
    Option: 'iOption',
    Progress: 'iProgress',
    Select: 'iSelect',
    Switch: 'iSwitch',
    Table: 'iTable'
}
Object.keys(alias).forEach(alia => {
    let old = iviewModule[alia]
    let current = [alias[alia]]
    iviewModule[alia] = old ? current.concat(old) : current
})


module.exports = {iviewModule}
// 循环注册全局组件
// Object.keys(iviewModule).forEach(key => {
//     Vue.component(key, iviewModule[key])
// })