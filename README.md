# babel-plugin-imports
插件位于src同级目录plugins中，package.json中引入方式为："babel-plugin-imports": "file:./plugins/babel-plugin-imports"
# iview按需引入前后对比(都引入了vue及相关loader、template-loader)
| 全量引入   | 按需引入  | 按需引入全部组件 |
| -------- | :----: | :----: |
| 634 KiB | 68.7 KiB | 500 KiB |
```
// 全量引入方式：
import iView from 'iview';
Vue.use(iView);
// 按需引入：使用组件babel-plugin-import
import { Button, Table } from 'iview';Vue.component('Button', Button);
Vue.component('Table', Table)
// 按需引入全部组件
import './iview'
```